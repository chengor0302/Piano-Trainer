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
        <div>
          <button onClick={() => setMode("register")}>Register</button>
          <button onClick={() => setMode("login")}>Login</button>
        </div>
      )}

      {mode === "register" && <RegisterForm onAuthSuccess={onAuthSuccess} />}
      {mode === "login" && <LoginForm onAuthSuccess={onAuthSuccess} />}

      {(mode === "login" || mode === "register") && (
        <button onClick={() => setMode(null)}>Back</button>
      )}
    </div>
  );
}

export default AuthLanding;
