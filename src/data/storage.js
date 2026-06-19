import { COMPLETED_RESULTS } from "./matches";

// Auto-seed real match results on first load
export function initResults() {
  const existing = localStorage.getItem("match_results");
  if (!existing) {
    localStorage.setItem("match_results", JSON.stringify(COMPLETED_RESULTS));
  } else {
    // Merge: keep admin overrides but add any new real results
    const current = JSON.parse(existing);
    let updated = false;
    Object.entries(COMPLETED_RESULTS).forEach(([id, res]) => {
      if (current[id] === undefined) {
        current[id] = res;
        updated = true;
      }
    });
    if (updated) localStorage.setItem("match_results", JSON.stringify(current));
  }
}

export function getPredictions(employeeCode) {
  try {
    const raw = localStorage.getItem(`predictions_${employeeCode}`);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

export function savePrediction(employeeCode, matchId, prediction) {
  const preds = getPredictions(employeeCode);
  preds[matchId] = prediction;
  localStorage.setItem(`predictions_${employeeCode}`, JSON.stringify(preds));
}

export function getResults() {
  try {
    const raw = localStorage.getItem("match_results");
    return raw ? JSON.parse(raw) : COMPLETED_RESULTS;
  } catch { return COMPLETED_RESULTS; }
}

export function saveResult(matchId, result) {
  const results = getResults();
  if (result === undefined) {
    delete results[matchId];
  } else {
    results[matchId] = result;
  }
  localStorage.setItem("match_results", JSON.stringify(results));
}

export function getAllPredictors(employees) {
  const results = getResults();
  return employees.map((emp) => {
    const preds = getPredictions(emp.code);
    let correct = 0, incorrect = 0, total = 0;
    Object.keys(preds).forEach((matchId) => {
      if (results[matchId] !== undefined) {
        total++;
        if (preds[matchId] === results[matchId]) correct++;
        else incorrect++;
      }
    });
    const pending = Object.keys(preds).filter(mid => results[mid] === undefined).length;
    return {
      ...emp,
      correct,
      incorrect,
      pending,
      total: Object.keys(preds).length,
      points: correct * 3,
    };
  });
}
