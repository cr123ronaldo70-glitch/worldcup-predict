import { isAdmin } from "../data/employees";

export default function Nav({ user, page, setPage, onLogout }) {
  return (
    <header className="nav">
      <div className="nav-brand">
        <span className="nav-trophy">🏆</span>
        <span className="nav-title">WC2026 Predict</span>
      </div>
      <nav className="nav-links">
        <button
          className={`nav-btn ${page === "predictions" ? "active" : ""}`}
          onClick={() => setPage("predictions")}
        >
          ⚽ Predict
        </button>
        <button
          className={`nav-btn ${page === "leaderboard" ? "active" : ""}`}
          onClick={() => setPage("leaderboard")}
        >
          📊 Leaderboard
        </button>
        {isAdmin(user) && (
          <button
            className={`nav-btn ${page === "admin" ? "active" : ""}`}
            onClick={() => setPage("admin")}
          >
            ⚙️ Admin
          </button>
        )}
      </nav>
      <div className="nav-user">
        <span className="nav-avatar">{user.name.charAt(0)}</span>
        <span className="nav-name">{user.name.split(" ")[0]}</span>
        <button className="nav-logout" onClick={onLogout} title="Logout">
          ↩
        </button>
      </div>
    </header>
  );
}
