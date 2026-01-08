import { useState, useEffect } from 'react';
import GuessNote from './GuessNote';
import RecognizeBySound from './RecognizeBySound';
import Settings from './Settings';
import Profile from './Profile';
import TopBar from './TopBar';
import type { SettingsType } from '../types/components';

function MainPage() {
  const [isGuessNote, setIsGuessNote] = useState(false);
  const [isRecognizeBySound, setIsRecognizeBySound] = useState(false);
  const [isSetting, setIsSetting] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const [settings, setSettings] = useState<SettingsType>(() => {
    const saved = localStorage.getItem('noteTrainerSettings');
    return saved
      ? JSON.parse(saved)
      : { noteOption: 'both', sharps: true, flats: true, time: 300 };
  });

  useEffect(() => {
    localStorage.setItem('noteTrainerSettings', JSON.stringify(settings));
  }, [settings]);

  const onBack = () => {
    setIsGuessNote(false);
    setIsRecognizeBySound(false);
    setIsSetting(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  if (isGuessNote) return <GuessNote onBack={onBack} settings={settings} />;
  if (isRecognizeBySound) return <RecognizeBySound onBack={onBack} settings={settings} />;
  if (isSetting) return <Settings onBack={onBack} settings={settings} setSettings={setSettings} />;

  return (
    <div>
      <TopBar
        onLogout={logout}
        onProfile={() => setShowProfile(true)}
      />

      {showProfile && <Profile onClose={() => setShowProfile(false)} />}

      <header>
        <h1>Welcome to Note Trainer</h1>
        <h3>Choose an option:</h3>
      </header>

      <div className="button-container">
        <button className="button primary" onClick={() => setIsGuessNote(true)}>
          Guess note game
        </button>
        <button className="button primary" onClick={() => setIsRecognizeBySound(true)}>
          Recognize by sound
        </button>
        <button className="button secondary" onClick={() => setIsSetting(true)}>
          Settings
        </button>
      </div>
    </div>
  );
}

export default MainPage;
