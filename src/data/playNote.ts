// src/data/playNote.ts
const audioCache: Record<string, HTMLAudioElement> = {};

const NOTE_MAP: Record<string, string> = {
  "C": "https://res.cloudinary.com/dinqsvekq/video/upload/v1766935659/c4_uvddqv.mp3",
  "C#": "https://res.cloudinary.com/dinqsvekq/video/upload/v1766935659/c-4_zpwyab.mp3",
  "D": "https://res.cloudinary.com/dinqsvekq/video/upload/v1766935691/d4_rcgvbw.mp3",
  "D#": "https://res.cloudinary.com/dinqsvekq/video/upload/v1766935692/d-4_kwdl5r.mp3",
  "E": "https://res.cloudinary.com/dinqsvekq/video/upload/v1766935703/e4_vsauyv.mp3",
  "F": "https://res.cloudinary.com/dinqsvekq/video/upload/v1766935718/f4_enystk.mp3",
  "F#": "https://res.cloudinary.com/dinqsvekq/video/upload/v1766935717/f-4_h5trbu.mp3",
  "G": "https://res.cloudinary.com/dinqsvekq/video/upload/v1766935732/g4_cyzpiz.mp3",
  "G#": "https://res.cloudinary.com/dinqsvekq/video/upload/v1766935733/g-4_ycwt3a.mp3",
  "A": "https://res.cloudinary.com/dinqsvekq/video/upload/v1766935742/a4_gq0dpx.mp3",
  "A#": "https://res.cloudinary.com/dinqsvekq/video/upload/v1766935743/a-4_qc5pfn.mp3",
  "B": "https://res.cloudinary.com/dinqsvekq/video/upload/v1766935750/b4_awhskp.mp3"
};

export function playNote(note: string) {
  const url = NOTE_MAP[note];
  if (!url) return;

  // אם האודיו כבר קיים, עצור אותו קודם
  let audio = audioCache[note];
  if (!audio) {
    audio = new Audio(url);
    audioCache[note] = audio;
    audio.load();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }

  audio.play().catch(err => console.log("Audio play failed:", err));
}
