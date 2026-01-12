import { useEffect, useState } from "react";

type Props = {
  onClose: () => void;
};

type UserProfile = {
  nickname: string;
  avatarUrl: string;
  email: string;
};

function Profile({ onClose }: Props) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:4000/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.message || "Failed to load profile");
        } else {
          setProfile(data);
        }
      } catch {
        setError("Network error");
      }
    };

    fetchProfile();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !profile) return;

    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "note_trainer_avatars");

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/dinqsvekq/image/upload`,
        { method: "POST", body: formData }
      );
      const data = await res.json();

      setProfile({ ...profile, avatarUrl: data.secure_url });

      const token = localStorage.getItem("token");
      const updateRes = await fetch("http://localhost:4000/auth/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          avatarUrl: data.secure_url,
          oldAvatarUrl: profile.avatarUrl,
        }),
      });

      const updatedData = await updateRes.json();
      if (!updateRes.ok) {
        setError(updatedData.message || "Failed to update avatar");
      } else {
        setProfile(updatedData); 
      }
    } catch (err) {
      console.error(err);
      setError("Image upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="profile-panel">
      <h2>Profile</h2>
    <div>
      {profile.avatarUrl && (
        <img
          src={profile.avatarUrl}
          alt="avatar"
          style={{ width: 100, borderRadius: "50%" }}
        />
      )}
      </div>

      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {isUploading && <p>Uploading...</p>}

      <p>
        <strong>Nickname:</strong> {profile.nickname}
      </p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button className="button secondary" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default Profile;
