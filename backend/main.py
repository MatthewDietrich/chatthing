from typing import Annotated

from fastapi import (
    Cookie,
    Depends,
    FastAPI,
    WebSocket,
    Query,
    WebSocketException,
    status,
)


app = FastAPI()


async def get_cookie_or_token(
    websocket: WebSocket,
    session: Annotated[str | None, Cookie()] = None,
    token: Annotated[str | None, Query()] = None,
):
    if session is None and token is None:
        raise WebSocketException(code=status.WS_1008_POLICY_VIOLATION)
    return session or token


@app.websocket("/ws")
async def websocket_endpoint(
    *,
    websocket: WebSocket,
    cookie_or_token: Annotated[str, Depends(get_cookie_or_token)]
):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_json({"message": data, "token": cookie_or_token})
