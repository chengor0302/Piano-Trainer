<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# Piano-Trainer 🎹

An interactive app for learning musical notes and chords through fun games using a virtual piano keyboard.

---

## About Me
Hi! My name is Chen, and I am a **Computer Science B.Sc. graduate from Ben-Gurion University**.  
I love playing the piano, so I thought of creating an app to help others start learning it too!

---

## About the Project
**Piano-Trainer** is designed to make learning musical notes and chords fun and interactive.  
The app currently includes features such as:  

- **Guess the Note** – click the correct note on the interactive piano keyboard.  
- **Instant feedback** – shows whether your answer was correct or wrong.  
- **Scoring system** – points increase for correct answers.  
- **Countdown timer** – challenge yourself before time runs out.  
- **Custom note designs** – all musical notes were designed in Figma to provide a clear and visually appealing interface.

> ⚠️ **Work in progress:** The project is still under development, and more games, lessons, and features will be added soon.

---

## Technologies Used
- **React** – for building interactive UI components.  
- **TypeScript** – for type safety and better code organization.  
- **CSS** – for styling the piano and feedback messages.  
- **Cloudinary** – hosting images for musical notes.  
- **Figma** – designed custom note images used in the app.

---

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Piano-Trainer.git
   
2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
  ```bash
   npm start
>>>>>>> 4dd62df5e77d1a1e859c6282974fed03619ed006
