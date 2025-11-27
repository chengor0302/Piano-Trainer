import { useState, useEffect } from 'react';
import GuessNote from './GuessNote';
import RecognizeBySound from './RecognizeBySound';
import Settings from './Settings';
import type { SettingsType } from '../types/components';

function MainPage() {
    const [isGuessNote, setIsGuessNote] = useState(false);
    const [isRecognizeBySound, setIsRecognizeBySound] = useState(false);
    const [isSetting, setIsSetting] = useState(false);
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

    if (isGuessNote) return <GuessNote onBack={onBack} settings={settings} />;
    if (isRecognizeBySound) return <RecognizeBySound onBack={onBack} settings={settings} />;
    if (isSetting) return <Settings onBack={onBack} settings={settings} setSettings={setSettings} />;

    return (
        <div>
            <h1>Welcome to Note Trainer</h1>
            <h2>Learn piano notes like a professional!</h2>
            <h3>Choose an option:</h3>

            <button className="button" onClick={() => setIsGuessNote(true)}>Guess note game</button>
            <button className="button" onClick={() => setIsRecognizeBySound(true)}>Recognize by sound</button>
            <button className="button" onClick={() => setIsSetting(true)}>Settings</button>
        </div>
    );
}

export default MainPage;
