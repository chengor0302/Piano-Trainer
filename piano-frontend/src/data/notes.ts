// notes.ts
export interface Note {
  name: string;
  kind: "treble" | "bass";
  isSharp: boolean;
  isFlat: boolean;
  urlCloud: string;
}

// Cloudinary cloud name
const CLOUD_NAME = "dinqsvekq";


//TREBLE 
export const allNotes: Note[] = [
  { name: "A3", kind: "treble", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/A3_zomgib.jpg` },
  { name: "A4", kind: "treble", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/A4_i7ulac.jpg` },
  { name: "A5", kind: "treble", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/A5_djr8eb.jpg` },
  { name: "B3", kind: "treble", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/B3_ydpj6e.jpg` },
  { name: "C5", kind: "treble", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/C5_ei8ta1.jpg` },
  { name: "D5", kind: "treble", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/D5_rquc74.jpg` },
  { name: "C6", kind: "treble", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/C6_dye2eh.jpg` },
  { name: "D4", kind: "treble", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/D4_ojvs9q.jpg` },
  { name: "B4", kind: "treble", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/B4_q4hhwo.jpg` },
  { name: "B5", kind: "treble", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/B5_fkdjof.jpg` },
  { name: "C4", kind: "treble", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/C4_e6mppz.jpg` },
  { name: "G5", kind: "treble", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/G5_d8oyra.jpg` },
  { name: "G4", kind: "treble", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/G4_twau78.jpg` },
  { name: "E4", kind: "treble", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/E4_wwqrcf.jpg` },
  { name: "E5", kind: "treble", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/E5_shayut.jpg` },
  { name: "F5", kind: "treble", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/F5_pq0717.jpg` },
  { name: "G3", kind: "treble", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/G3_pdpe4q.jpg` },
  { name: "F4", kind: "treble", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/F4_nqjgle.jpg` },


  //Bass
  { name: "A2", kind: "bass", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/A2_z0b11t.jpg` },
  { name: "B2", kind: "bass", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/B2_uvfm2e.jpg` },
  { name: "A3", kind: "bass", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/A3_hs8e0i.jpg` },
  { name: "B3", kind: "bass", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/B3_gyghfm.jpg` },
  { name: "C4", kind: "bass", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/C4_x5nd8k.jpg` },
  { name: "C3", kind: "bass", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/C3_vzotxl.jpg` },
  { name: "D3", kind: "bass", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/D3_y5cd6r.jpg` },
  { name: "E3", kind: "bass", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/E3_n2zr4b.jpg` },
  { name: "E2", kind: "bass", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/E2_v9zyjo.jpg` },
  { name: "F2", kind: "bass", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/F2_u42ipu.jpg` },
  { name: "F3", kind: "bass", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/F3_e0zrxm.jpg` },
  { name: "G2", kind: "bass", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/G2_zidfdr.jpg` },
  { name: "G3", kind: "bass", isSharp: false, isFlat: false, urlCloud: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/G3_qco4di.jpg` },
];
