import { useState } from "react";

function ChatInput(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="w-960 flex">
        <textarea
          className="w-full float-left mx-5"
          value={props.message}
          onChange={props.onChange}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              props.onSubmit(e);
            }
          }}
        />
        <input
          type="submit"
          className="bg-white px-5 mx-5"
          value="Send"
        />
      </div>
    </form>
  );
}

export default ChatInput;
