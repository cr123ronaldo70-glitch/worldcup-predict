import { useState } from "react";
import { MATCHES } from "../data/matches";
import { getResults, saveResult } from "../data/storage";
import { isAdmin } from "../data/employees";

const ADMIN_CODE = "admin2026";

export default function Admin({ user }) {
  const [unlocked, setUnlocked] = useState(false);
  const [adminPass, setAdminPass] = useState("");
  const [results, setResults] = useState(getResults());
  const [saved, setSaved] = useState(null);

  const tryUnlock = (e) => {
    e.preventDefault();
    if (!isAdmin(user)) {
      alert("You are not authorized to access the admin panel.");
      return;
    }
    if (adminPass === ADMIN_CODE) setUnlocked(true);
    else alert("Wrong admin password");
  };

  // Block non-admins entirely, even if they reach this component.
  if (!isAdmin(user)) {
    return (
      <div className="admin-lock">
        <div className="admin-lock-card">
          <div className="admin-icon">🚫</div>
          <h2>Access Denied</h2>
          <p>Only authorized admins (Sandeep Chhetri, Niroj Shrestha) can manage results.</p>
        </div>
      </div>
    );
  }

  const setResult = (matchId, result) => {
    saveResult(matchId, result);
    const updated = getResults();
    setResults({ ...updated });
    setSaved(matchId);
    setTimeout(() => setSaved(null), 1500);
  };

  if (!unlocked) {
    return (
      <div className="admin-lock">
        <div className="admin-lock-card">
          <div className="admin-icon">⚙️</div>
          <h2>Admin Panel</h2>
          <p>Enter admin password to enter match results</p>
          <form onSubmit={tryUnlock}>
            <input
              className="admin-input"
              type="password"
              value={adminPass}
              onChange={(e) => setAdminPass(e.target.value)}
              placeholder="Admin password"
              autoFocus
            />
            <button className="admin-btn" type="submit">Unlock</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <h2 className="admin-title">⚙️ Admin — Enter Match Results</h2>
      <p className="admin-sub">Select the result for each completed match. Points are auto-calculated.</p>
      <div className="admin-grid">
        {MATCHES.map((m) => {
          const r = results[m.id];
          return (
            <div key={m.id} className={`admin-card ${r ? "has-result" : ""}`}>
              <div className="admin-match-info">
                <span className="admin-group">{m.group}</span>
                <span className="admin-vs">
                  {m.homeFlag} {m.home} vs {m.away} {m.awayFlag}
                </span>
              </div>
              <div className="admin-pick-row">
                {[
                  { val: "home", label: `${m.homeFlag} ${m.home} Win` },
                  { val: "draw", label: "🤝 Draw" },
                  { val: "away", label: `${m.awayFlag} ${m.away} Win` },
                ].map((o) => (
                  <button
                    key={o.val}
                    className={`admin-result-btn ${r === o.val ? "selected" : ""}`}
                    onClick={() => setResult(m.id, o.val)}
                  >
                    {o.label}
                  </button>
                ))}
                {r && (
                  <button
                    className="admin-clear-btn"
                    onClick={() => setResult(m.id, undefined)}
                    title="Clear result"
                  >
                    ✕
                  </button>
                )}
              </div>
              {saved === m.id && <div className="admin-saved">✅ Saved!</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
