type Props = {
  onClose: () => void;
};

function Profile({ onClose }: Props) {
  const nickname = localStorage.getItem("nickname");
  const avatarUrl = localStorage.getItem("avatarUrl");

  return (
    <div className="profile-panel">
      <h2>Profile</h2>

      {avatarUrl && (
        <img
          src={avatarUrl}
          alt="avatar"
          style={{ width: 100, borderRadius: "50%" }}
        />
      )}

      <p><strong>Nickname:</strong> {nickname}</p>

      <button className="button secondary" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default Profile;
