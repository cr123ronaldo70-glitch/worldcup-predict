import { useState, useEffect } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import Admin from "./components/Admin";
import Nav from "./components/Nav";
import { initResults } from "./data/storage";
import { isAdmin } from "./data/employees";

export default function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("predictions");

  useEffect(() => {
    initResults(); // seed real completed match results on startup
    const saved = sessionStorage.getItem("wc_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const handleLogin = (employee) => {
    setUser(employee);
    sessionStorage.setItem("wc_user", JSON.stringify(employee));
  };

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem("wc_user");
    setPage("predictions");
  };

  if (!user) return <Login onLogin={handleLogin} />;

  return (
    <div className="app">
      <Nav user={user} page={page} setPage={setPage} onLogout={handleLogout} />
      <main className="main-content">
        {page === "predictions" && <Dashboard user={user} />}
        {page === "leaderboard" && <Leaderboard currentUser={user} />}
        {page === "admin" && isAdmin(user) && <Admin user={user} />}
        {page === "admin" && !isAdmin(user) && (
          <div className="admin-lock">
            <div className="admin-lock-card">
              <div className="admin-icon">🚫</div>
              <h2>Access Denied</h2>
              <p>Only authorized admins can view this page.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
