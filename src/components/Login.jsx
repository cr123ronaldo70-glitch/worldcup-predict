import { useState } from "react";
import { findEmployee } from "../data/employees";

export default function Login({ onLogin }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [found, setFound] = useState(null);
  const [shake, setShake] = useState(false);

  const handleInput = (val) => {
    setCode(val);
    setError("");
    const emp = findEmployee(val);
    setFound(emp || null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emp = findEmployee(code);
    if (emp) {
      onLogin(emp);
    } else {
      setError("Invalid code. Please check and try again.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="login-screen">
      <div className="login-bg">
        <div className="login-stars"></div>
      </div>
      <div className={`login-card ${shake ? "shake" : ""}`}>
        <div className="login-trophy">🏆</div>
        <h1 className="login-title">FIFA World Cup 2026</h1>
        <p className="login-subtitle">Staff Prediction League</p>
        <p className="login-org">Organized by your team · Nepal NST</p>

        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-label">Enter Your Employee Code</label>
          <input
            className="login-input"
            type="text"
            value={code}
            onChange={(e) => handleInput(e.target.value)}
            placeholder="e.g. 01 7095 or 017095"
            autoFocus
            autoComplete="off"
          />
          {found && (
            <div className="login-preview">
              <span className="login-check">✓</span>
              <span className="login-found-name">{found.name}</span>
            </div>
          )}
          {error && <p className="login-error">{error}</p>}
          <button className="login-btn" type="submit">
            Enter Prediction Zone
          </button>
        </form>
        <p className="login-hint">Your code is on your employee ID badge</p>
      </div>
    </div>
  );
}
