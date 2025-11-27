import type { WithBackButton } from '../types/components';
import type { SettingsType } from '../types/components';

type Props = WithBackButton & {
    settings: SettingsType;
};

function RecognizeBySound({ onBack, settings }: Props) {
    return (
        <div>
            <h1>Recognize By Sound</h1>
            <button onClick={onBack}>Back</button>
        </div>
    );
}

export default RecognizeBySound;
