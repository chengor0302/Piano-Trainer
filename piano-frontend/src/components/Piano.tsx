import './Piano.css';

type PianoProps = {
    keyPress: (noteName: string) => void
}

function Piano({keyPress} : PianoProps){
    const keys = [
    { note: "C", isBlack: false },
    { note: "C#", isBlack: true },
    { note: "D", isBlack: false },
    { note: "D#", isBlack: true },
    { note: "E", isBlack: false },
    { note: "F", isBlack: false },
    { note: "F#", isBlack: true },
    { note: "G", isBlack: false },
    { note: "G#", isBlack: true },
    { note: "A", isBlack: false },
    { note: "A#", isBlack: true },
    { note: "B", isBlack: false },
  ];

    return(
    <div className="piano" id="piano">
        {keys.map((key) => (
            <div
            key={key.note}
            className={`key ${key.isBlack ? "black" : ""}`}
            onClick={() => keyPress(key.note)}>
                {key.note}
            </div>
        ))}
    </div>
);

}


export default Piano;