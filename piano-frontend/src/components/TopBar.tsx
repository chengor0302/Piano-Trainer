type Props = {
  onLogout: () => void;
  onProfile: () => void;
};

function TopBar({ onLogout, onProfile }: Props) {
  return (
    <div className="top-bar">
      <button className="button secondary" onClick={onProfile}>
        Profile
      </button>
      <button className="button danger" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default TopBar;
