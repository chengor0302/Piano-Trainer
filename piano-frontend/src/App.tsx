import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from "react";
import MainPage from './components/MainPage'
import AuthLanding from "./components/AuthLanding";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("token")));

  return (
    <>
      {isLoggedIn ? (
        <MainPage />
      ) : (
        <AuthLanding onAuthSuccess={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default App;