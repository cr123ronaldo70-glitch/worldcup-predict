# ⚽ WC2026 Staff Prediction League

A staff World Cup 2026 match prediction app built with React + Vite.

## Features
- 🔐 Employee login using staff codes (auto-fills name)
- ⚽ Predict match results: Home Win / Draw / Away Win
- 🔒 Predictions lock 15 minutes before kickoff (Nepal NST)
- 🏆 Leaderboard with 👑🥈🥉 crowns for top 3
- 📊 Personal dashboard: correct, incorrect, pending, total, points
- ⚙️ Admin panel to enter official results (password protected)

## Employee Login Codes
Format: enter your code as shown on your badge, e.g. `01 7095` or `017095`

## Admin Panel
- Password: `admin2026`
- Enter official results after each match
- Points auto-calculated (3 pts per correct prediction)

## Deploy to Vercel (free)

### 1. Push to GitHub
```bash
cd wc2026-predict
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/wc2026-predict.git
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to https://vercel.com and sign up / log in
2. Click **New Project** → Import your GitHub repo
3. Vercel auto-detects Vite — leave settings as default
4. Click **Deploy** ✅

Your app will be live at `https://wc2026-predict.vercel.app`

## Local Development
```bash
npm install
npm run dev
```
