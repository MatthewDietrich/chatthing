import './App.css';
import { useEffect, useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import ChatOutput from './components/elements/ChatOutput';
import ChatMessage from './components/elements/ChatMessage';
import VoiceOutput from './components/elements/VoiceOutput';
import ChatInput from './components/elements/ChatInput';

function App() {
  const [socketUrl, setSocketUrl] = useState("ws://localhost:8000/ws?token=chicanery");
  const [messageHistory, setMessageHistory] = useState([]);
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (lastMessage !== null) {
      console.log(lastMessage);
      setMessageHistory((prev) => prev.concat(JSON.parse(lastMessage.data)))
    }
  }, [lastMessage, setMessageHistory]);

  function send(event) {
    const msg = {
      userName: "frogFortress",
      action: "send",
      message: message
    };
    sendMessage(JSON.stringify(msg));
    setMessage("");
    event.preventDefault();
  }

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Connected',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Disconnected',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  return (
    <div className="App bg-slate px-5 py-5">
      <VoiceOutput />
      <div className="h-screen">
        <ChatOutput messageHistory={messageHistory} />
        <ChatInput
          message={message}
          onChange={(e) => setMessage(e.target.value)}
          onSubmit={send}
        />
        <div className="flex px-5">
          <small className="text-white">Status: {connectionStatus}</small>
        </div>
      </div>
    </div>
  );
}

export default App;
