import { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

type Props = {
  onAuthSuccess: () => void;
};

function AuthLanding({ onAuthSuccess }: Props) {
  const [mode, setMode] = useState<"login" | "register" | null>(null);

  return (
    <div>
      <header>
        <h1>🎹 Note Trainer</h1>
        <h2>Learn piano notes like a pro</h2>
      </header>

      {!mode && (
        <div className="button-container">
          <button className="button primary" onClick={() => setMode("register")}>
            Register
          </button>
          <button className="button secondary" onClick={() => setMode("login")}>
            Login
          </button>
        </div>
      )}

      {mode === "register" && (
        <RegisterForm />
      )}

      {mode === "login" && (
        <LoginForm />
      )}

      <div style={{ marginTop: "20px" }}>
        {(mode === "login" || mode === "register") && (
          <button className="button secondary" onClick={() => setMode(null)}>
            Back
          </button>
        )}
      </div>
    </div>
  );
}

export default AuthLanding;
