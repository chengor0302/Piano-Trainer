import { useState, useEffect } from 'react';
import Piano from './Piano';
import { playNote } from '../data/playNote';

const NOTES = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

type Props = {
  onBack: () => void;
  settings: {
    time: number; // זמן המשחק בשניות
  };
};

function RecognizeBySound({ onBack, settings }: Props) {
  const [currentNote, setCurrentNote] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ msg: string; type: 'correct' | 'wrong' } | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(settings.time);

  const playRandomNote = () => {
    const note = NOTES[Math.floor(Math.random() * NOTES.length)];
    setCurrentNote(note);
    playNote(note);
  };

  const handleKeyPress = (note: string) => {
    if (!currentNote) return;

    if (note === currentNote) {
      setScore(score + 1);
      setFeedback({ msg: 'Correct!', type: 'correct' });
      setTimeout(() => {
        setFeedback(null);
        playRandomNote();
      }, 800);
    } else {
      setFeedback({ msg: 'Try again', type: 'wrong' });
      setTimeout(() => setFeedback(null), 800);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setFeedback(null);
    setTimeLeft(settings.time);
    playRandomNote();
  };

  useEffect(() => {
    if (!gameStarted) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          alert(`Time's up! Score: ${score}`);
          onBack();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted, score, onBack]);

  return (
    <div>
      <header>
        <h1>Recognize By Sound</h1>
      </header>

      {!gameStarted ? (
        <div className="button-container">
          <button className="button primary" onClick={startGame}>
            Start Game
          </button>
        </div>
      ) : (
        <>
          <div className="scoreboard">
            <span>Time Left: {timeLeft}s</span>
            <span>Score: {score}</span>
          </div>

          {feedback && (
            <div className={`feedback ${feedback.type}`}>
              {feedback.msg}
            </div>
          )}

          <Piano keyPress={handleKeyPress} />

          <div className="button-container">
            <button className="button secondary" onClick={() => currentNote && playNote(currentNote)}>
              Play Again
            </button>
          </div>
        </>
      )}

      <div className="button-container">
        <button className="button secondary" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
}

export default RecognizeBySound;
