import type { WithBackButton, SettingsType } from '../types/components';

type Props = WithBackButton & {
    settings: SettingsType;
    setSettings: React.Dispatch<React.SetStateAction<SettingsType>>;
};

function Settings({ onBack, settings, setSettings }: Props) {
    return (
        <div>
            <h1>Settings</h1>
            <div>
                <h3>Type of notes shown in game:</h3>
                {['treble', 'bass', 'both'].map((opt) => (
                    <label key={opt}>
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

            <div>
                <h3>Include flats?</h3>
                <label>
                    <input
                        type="radio"
                        name="flats"
                        checked={settings.flats}
                        onChange={() => setSettings({ ...settings, flats: true })}
                    />
                    Yes
                </label>
                <label>
                    <input
                        type="radio"
                        name="flats"
                        checked={!settings.flats}
                        onChange={() => setSettings({ ...settings, flats: false })}
                    />
                    No
                </label>
            </div>

            <div>
                <h3>Include sharps?</h3>
                <label>
                    <input
                        type="radio"
                        name="sharps"
                        checked={settings.sharps}
                        onChange={() => setSettings({ ...settings, sharps: true })}
                    />
                    Yes
                </label>
                <label>
                    <input
                        type="radio"
                        name="sharps"
                        checked={!settings.sharps}
                        onChange={() => setSettings({ ...settings, sharps: false })}
                    />
                    No
                </label>
            </div>

            <div>
                <h3>Choose time per game:</h3>
                {[60, 300, 600].map((t) => (
                    <label key={t}>
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

            <button onClick={onBack}>Back to main page</button>
        </div>
    );
}

export default Settings;
