import ChatMessage from "./ChatMessage";

function ChatBox(props) {
  return (
    <div className="w-960 bg-white text-left px-5 py-5 mx-5 my-5 h-4/6">
      {props.messageHistory.map((msg) =>
        <ChatMessage message={msg} />
      )}
    </div>
  );
}

export default ChatBox;
