import { useState } from "react";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const url = "http://localhost:4000/auth/register";

    const body = {
      email,
      nickname,
      password,
      avatarUrl,
    };

    try {
      console.log("Sending register request", body);
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      console.log('Registration response:', data);

      if (!res.ok) {
        // Show detailed error message
        const errorMsg = data.error 
          ? `Error: ${data.error}` 
          : data.message || "Registration failed";
        setError(errorMsg);
        console.error('Registration error:', data);
        return;
      }

      if (data.token) {
         alert("Registration successful");
      }
      else {
        setError(data.error || 'Something went wrong');
      }
    } catch {
      setError("Network error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Avatar URL (optional)"
        value={avatarUrl}
        onChange={(e) => setAvatarUrl(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div> <button type="submit">Register</button> </div>
    </form>
  );
}

export default RegisterForm;
