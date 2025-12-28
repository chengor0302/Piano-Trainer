import React, { useState, useEffect } from 'react';
import { allNotes } from '../data/notes';
import type { Note, SettingsType } from '../types/components';
import Piano from './Piano';

type Props = {
  onBack: () => void;
  settings: SettingsType;
};

const GuessNote: React.FC<Props> = ({ onBack, settings }) => {
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(settings.time);
  const [feedback, setFeedback] = useState<{msg: string, type: 'correct'|'wrong'} | null>(null);

  const filteredNotes = allNotes.filter(note => {
    if (settings.noteOption !== 'both' && note.kind !== settings.noteOption) return false;
    if (!settings.sharps && note.isSharp) return false;
    if (!settings.flats && note.isFlat) return false;
    return true;
  });

  const nextNote = () => {
    const index = Math.floor(Math.random() * filteredNotes.length);
    setCurrentNote(filteredNotes[index]);
  };

  useEffect(() => {
    nextNote();
  }, []);

  const handleKeyPress = (noteName: string) => {
    const is_two_chars = currentNote?.isFlat || currentNote?.isSharp;
    if (is_two_chars){
        if (noteName === currentNote.name.slice(0,2)){
            setScore(score + 1);
            setFeedback({msg: "Correct!", type: "correct"});
            nextNote();
        }
        else{
            setFeedback({msg: "Try Again", type: "wrong"});
        }
    }
    else{
        if (noteName === currentNote?.name.charAt(0)){
            setFeedback({msg: "Correct!", type: "correct"});
            setScore(score + 1);
            nextNote();
        }
        else{
            setFeedback({msg: "Try Again", type: "wrong"});
        }
    }
      setTimeout(() => setFeedback(null), 1000);
  };

  useEffect(() => {
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
  }, [score]);


  return (
    <div>
      <header>
        <h1>Guess the Note</h1>
      </header>

      <div className="scoreboard">
        <span>Score: {score}</span>
        <span>Time Left: {timeLeft}s</span>
      </div>

      {feedback && (
        <div className={`feedback ${feedback.type}`}>
          {feedback.msg}
        </div>
      )}

      {currentNote && (
        <img src={currentNote.urlCloud} alt={currentNote.name} className="note-image" />
      )}

      <Piano keyPress={handleKeyPress} />

      <div className="button-container">
        <button className="button secondary" onClick={onBack}>Back</button>
      </div>
    </div>
  );
};

export default GuessNote;
