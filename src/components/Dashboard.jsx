import { useState, useEffect } from "react";
import { MATCHES, getMatchStatus } from "../data/matches";
import { getPredictions, savePrediction, getResults } from "../data/storage";

function formatNST(isoString) {
  const d = new Date(isoString);
  return d.toLocaleString("en-NP", {
    timeZone: "Asia/Kathmandu",
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function MatchCard({ match, userCode }) {
  const [preds, setPreds] = useState(getPredictions(userCode));
  const results = getResults();
  const status = getMatchStatus(match);
  const myPick = preds[match.id];
  const result = results[match.id];
  const isCorrect = myPick && result && myPick === result;
  const isWrong = myPick && result && myPick !== result;

  const pick = (choice) => {
    if (status !== "open") return;
    savePrediction(userCode, match.id, choice);
    setPreds(getPredictions(userCode));
  };

  const opts = [
    { val: "home", label: match.homeFlag + " " + match.home },
    { val: "draw", label: "Draw" },
    { val: "away", label: match.awayFlag + " " + match.away },
  ];

  let cardClass = "match-card";
  if (isCorrect) cardClass += " correct";
  if (isWrong) cardClass += " wrong";
  if (status === "locked") cardClass += " locked";
  if (status === "live_or_finished") cardClass += " finished";

  return (
    <div className={cardClass}>
      <div className="match-meta">
        <span className="match-group">{match.group}</span>
        <span className="match-time">{formatNST(match.kickoff)}</span>
        {status === "locked" && <span className="match-badge locked-badge">🔒 Locked</span>}
        {status === "live_or_finished" && <span className="match-badge live-badge">⚡ Live/Done</span>}
        {status === "open" && <span className="match-badge open-badge">🟢 Open</span>}
      </div>
      <div className="match-teams">
        <div className="match-team home">
          <span className="team-flag">{match.homeFlag}</span>
          <span className="team-name">{match.home}</span>
        </div>
        <div className="vs-block">VS</div>
        <div className="match-team away">
          <span className="team-flag">{match.awayFlag}</span>
          <span className="team-name">{match.away}</span>
        </div>
      </div>
      <div className="match-venue">📍 {match.venue}</div>
      <div className="pick-row">
        {opts.map((o) => {
          let btnClass = "pick-btn";
          if (myPick === o.val) btnClass += " picked";
          if (result && myPick === o.val && isCorrect) btnClass += " btn-correct";
          if (result && myPick === o.val && isWrong) btnClass += " btn-wrong";
          if (result && !myPick && result === o.val) btnClass += " btn-result";
          return (
            <button
              key={o.val}
              className={btnClass}
              onClick={() => pick(o.val)}
              disabled={status !== "open"}
            >
              {o.val === "draw" ? "🤝 Draw" : o.label}
              {result === o.val && " ✓"}
            </button>
          );
        })}
      </div>
      {isCorrect && <div className="match-result-msg correct-msg">✅ Correct! +3 pts</div>}
      {isWrong && <div className="match-result-msg wrong-msg">❌ Incorrect — result: {result}</div>}
    </div>
  );
}

export default function Dashboard({ user }) {
  const [filter, setFilter] = useState("all");
  const [preds, setPreds] = useState(getPredictions(user.code));
  const results = getResults();

  useEffect(() => {
    const interval = setInterval(() => setPreds(getPredictions(user.code)), 3000);
    return () => clearInterval(interval);
  }, [user.code]);

  let correct = 0, incorrect = 0, total = 0, pending = 0;
  Object.keys(preds).forEach((mid) => {
    if (results[mid] !== undefined) {
      total++;
      if (preds[mid] === results[mid]) correct++;
      else incorrect++;
    } else if (preds[mid]) {
      pending++;
    }
  });
  const points = correct * 3;

  const groups = [...new Set(MATCHES.map((m) => m.group))];
  const filtered =
    filter === "all"
      ? MATCHES
      : filter === "open"
      ? MATCHES.filter((m) => getMatchStatus(m) === "open")
      : MATCHES.filter((m) => m.group === filter);

  return (
    <div className="dashboard">
      <div className="profile-banner">
        <div className="profile-avatar">{user.name.charAt(0)}</div>
        <div className="profile-info">
          <h2 className="profile-name">{user.name}</h2>
          <span className="profile-code">#{user.code}</span>
        </div>
        <div className="profile-stats">
          <div className="stat-pill">
            <span className="stat-num">{points}</span>
            <span className="stat-lbl">Points</span>
          </div>
          <div className="stat-pill correct-pill">
            <span className="stat-num">{correct}</span>
            <span className="stat-lbl">Correct</span>
          </div>
          <div className="stat-pill wrong-pill">
            <span className="stat-num">{incorrect}</span>
            <span className="stat-lbl">Wrong</span>
          </div>
          <div className="stat-pill pend-pill">
            <span className="stat-num">{pending}</span>
            <span className="stat-lbl">Pending</span>
          </div>
          <div className="stat-pill total-pill">
            <span className="stat-num">{Object.keys(preds).length}</span>
            <span className="stat-lbl">Made</span>
          </div>
        </div>
      </div>

      <div className="filter-bar">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === "open" ? "active" : ""}`}
          onClick={() => setFilter("open")}
        >
          🟢 Open
        </button>
        {groups.map((g) => (
          <button
            key={g}
            className={`filter-btn ${filter === g ? "active" : ""}`}
            onClick={() => setFilter(g)}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="matches-grid">
        {filtered.map((m) => (
          <MatchCard key={m.id} match={m} userCode={user.code} />
        ))}
      </div>
    </div>
  );
}
