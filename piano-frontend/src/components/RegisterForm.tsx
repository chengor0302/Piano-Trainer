import { useState } from "react";

const CLOUD_NAME = "dinqsvekq"; 
const UPLOAD_PRESET = "note_trainer_avatars"; 

type Props = {
  onAuthSuccess: () => void;
};

function RegisterForm({ onAuthSuccess }: Props) {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false); 

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!avatarUrl) {
      setError("Please upload an avatar image");
      return;
    }

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
        const errorMsg = data.error || data.message || "Registration failed";
        setError(errorMsg);
        return;
      }

      if (data.token) {
        localStorage.setItem("token", data.token); 
        onAuthSuccess(); 
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch {
      setError("Network error");
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      setAvatarUrl(data.secure_url);
    } catch (err) {
      console.error("Image upload error:", err);
      setError("Failed to upload image");
    } finally {
      setIsUploading(false);
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
      <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>
      {isUploading && <p>Uploading image...</p>}

      {avatarUrl && (
        <div style={{ marginTop: "10px" }}>
          <img
            src={avatarUrl}
            alt="Avatar preview"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" disabled={isUploading}>
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
