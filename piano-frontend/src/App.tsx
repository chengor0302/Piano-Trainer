import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './components/MainPage'
import AuthLanding from "./components/AuthLanding";


function App() {
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  return (
    <>
      {isLoggedIn ? <MainPage /> : <AuthLanding onAuthSuccess={() => {}} />}
    </>
  );
}

export default App
