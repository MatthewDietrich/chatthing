function ChatMessage(props) {
  const selfNameClasses = "text-periwinkle";
  const otherUserNameClasses = "text-slate";

  const nameClasses = "font-bold " + (props.isSelf ? selfNameClasses : otherUserNameClasses);

  const msgData = JSON.parse(props.message.message);

  return (
    <div>
      <span className={props.isMention ? "bg-jasper" : "bg-white"}>
        <span className={nameClasses}>{msgData.userName}:</span> {msgData.message} {props.message.token}
      </span>
    </div>
  );
}

export default ChatMessage;
