import { useState } from "react";

type Props = {
  onAuthSuccess: () => void;
};

function RegisterForm({ onAuthSuccess }: Props) {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const url = "http://localhost:4000/auth/register";

    const body = { email, nickname, password, avatarUrl };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMsg = data.error ? `Error: ${data.error}` : data.message || "Registration failed";
        setError(errorMsg);
        return;
      }

      if (data.token) {
        localStorage.setItem("token", data.token); // שמירת ה-token
        onAuthSuccess(); // מודיע ל-App שהמשתמש מחובר
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch {
      setError("Network error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder="Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <input type="text" placeholder="Avatar URL (optional)" value={avatarUrl} onChange={(e) => setAvatarUrl(e.target.value)} />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
