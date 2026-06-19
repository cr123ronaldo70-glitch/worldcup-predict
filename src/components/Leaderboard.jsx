import { EMPLOYEES } from "../data/employees";
import { getAllPredictors } from "../data/storage";

const CROWNS = ["👑", "🥈", "🥉"];
const CROWN_LABELS = ["Champion", "Runner-up", "3rd Place"];

export default function Leaderboard({ currentUser }) {
  const board = getAllPredictors(EMPLOYEES).sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    return b.correct - a.correct;
  });

  const top3 = board.slice(0, 3);
  const rest = board.slice(3);

  return (
    <div className="leaderboard">
      <h2 className="lb-title">🏆 Prediction Leaderboard</h2>
      <p className="lb-subtitle">3 points per correct prediction · Nepal NST</p>

      {/* Podium */}
      <div className="podium">
        {top3.map((p, i) => (
          <div key={p.code} className={`podium-card rank-${i + 1} ${p.code === currentUser.code ? "me" : ""}`}>
            <div className="podium-crown">{CROWNS[i]}</div>
            <div className="podium-avatar">{p.name.charAt(0)}</div>
            <div className="podium-name">{p.name}</div>
            <div className="podium-label">{CROWN_LABELS[i]}</div>
            <div className="podium-points">{p.points} pts</div>
            <div className="podium-mini">
              <span className="green">{p.correct}✓</span>
              <span className="red">{p.incorrect}✗</span>
              <span className="gray">{p.pending}⏳</span>
            </div>
          </div>
        ))}
      </div>

      {/* Full table */}
      <div className="lb-table-wrap">
        <table className="lb-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Points</th>
              <th>✅ Correct</th>
              <th>❌ Wrong</th>
              <th>⏳ Pending</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {board.map((p, i) => (
              <tr
                key={p.code}
                className={`lb-row ${p.code === currentUser.code ? "lb-me" : ""} ${i < 3 ? `lb-top${i + 1}` : ""}`}
              >
                <td className="lb-rank">
                  {i < 3 ? CROWNS[i] : i + 1}
                </td>
                <td className="lb-name">
                  {p.name}
                  {p.code === currentUser.code && <span className="you-badge">YOU</span>}
                </td>
                <td className="lb-pts">{p.points}</td>
                <td className="lb-correct">{p.correct}</td>
                <td className="lb-wrong">{p.incorrect}</td>
                <td className="lb-pend">{p.pending}</td>
                <td className="lb-total">{p.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
