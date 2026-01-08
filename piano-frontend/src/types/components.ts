export interface WithBackButton {
    onBack: () => void;
}

export type noteOption = 'treble' | 'bass' | 'both';

export interface SettingsType {
  noteOption: noteOption;
  sharps: boolean;
  flats: boolean;
  time: number;
}

export type noteKind = 'treble' | 'bass';

export interface Note{
    name: string;
    kind: noteKind;
    isFlat: boolean;
    isSharp: boolean;
    urlCloud: string;
}


