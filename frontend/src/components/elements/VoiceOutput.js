function VoiceOutput(props) {
  return (
    <div className="w-960 px-5 py-5">
      <h1 className="text-3xl text-white">Currently talking: nephi</h1>
      <h2 className="text-lg text-white">Microphone switch in 7:28</h2>
      {props.children}
    </div>
  );
}

export default VoiceOutput;
