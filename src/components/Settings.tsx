import type { WithBackButton, SettingsType } from '../types/components';

type Props = WithBackButton & {
    settings: SettingsType;
    setSettings: React.Dispatch<React.SetStateAction<SettingsType>>;
};

function Settings({ onBack, settings, setSettings }: Props) {
    return (
        <div>
            <header>
                <h1>Settings</h1>
            </header>

            <div className="settings-section">
                <h3>Type of notes shown in game:</h3>
                {['treble', 'bass', 'both'].map((opt) => (
                    <label key={opt} className="radio-label">
                        <input
                            type="radio"
                            name="noteOption"
                            checked={settings.noteOption === opt}
                            onChange={() => setSettings({ ...settings, noteOption: opt as 'treble' | 'bass' | 'both' })}
                        />
                        {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </label>
                ))}
            </div>

            <div className="settings-section">
                <h3>Include flats?</h3>
                <label className="radio-label">
                    <input
                        type="radio"
                        name="flats"
                        checked={settings.flats}
                        onChange={() => setSettings({ ...settings, flats: true })}
                    />
                    Yes
                </label>
                <label className="radio-label">
                    <input
                        type="radio"
                        name="flats"
                        checked={!settings.flats}
                        onChange={() => setSettings({ ...settings, flats: false })}
                    />
                    No
                </label>
            </div>

            <div className="settings-section">
                <h3>Include sharps?</h3>
                <label className="radio-label">
                    <input
                        type="radio"
                        name="sharps"
                        checked={settings.sharps}
                        onChange={() => setSettings({ ...settings, sharps: true })}
                    />
                    Yes
                </label>
                <label className="radio-label">
                    <input
                        type="radio"
                        name="sharps"
                        checked={!settings.sharps}
                        onChange={() => setSettings({ ...settings, sharps: false })}
                    />
                    No
                </label>
            </div>

            <div className="settings-section">
                <h3>Choose time per game:</h3>
                {[60, 300, 600].map((t) => (
                    <label key={t} className="radio-label">
                        <input
                            type="radio"
                            name="time"
                            checked={settings.time === t}
                            onChange={() => setSettings({ ...settings, time: t })}
                        />
                        {t / 60} {t === 60 ? 'minute' : 'minutes'}
                    </label>
                ))}
            </div>

            <div className="button-container">
                <button className="button secondary" onClick={onBack}>Back to main page</button>
            </div>
        </div>
    );
}

export default Settings;
