# Note Trainer- Project still in progress 

**Note Trainer** is a web application for learning piano notes.
Users can register, upload a profile picture, and view piano notes in Treble and Bass clefs.
Note images, audio files and user avatars are stored in the cloud using Cloudinary.

---

## 📝 Features

- User registration and login with email and password.
- Store and display user profile pictures.
-  Display Treble and Bass notes with images from Cloudinary.
- **Interactive games for learning notes**:
  - **Game 1 – Note Recognition (Visual):** Shows notes designed in Figma and stored in Cloudinary. The user must identify the correct key on the interactive piano. Correct answers earn points and move to the next note.
  - **Game 2 – Note Recognition (Audio):** Plays a note sound (stored in Cloudinary). The user must identify the correct piano key. Similar scoring system as Game 1.
  -  Time per games is configurable in settings.
  -  Potential for more games in the future.
- Data stored in PostgreSQL (Sequelize ORM).
- Passwords hashed with bcrypt for security.
- Authentication with JWT.
- User data stored in PostgreSQL (Sequelize ORM).
- Passwords hashed with bcrypt for security.
- Authentication with JWT.
- 

---

## ⚙️ Requirements

- Node.js >= 18
- PostgreSQL
- Cloudinary account (API Key and API Secret)
- npm or yarn

---
