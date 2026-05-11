<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=180&text=Time%20Table%20Management&fontAlign=50&fontAlignY=35&desc=Dynamic%20Timetable%20Generator&descAlign=50&descAlignY=55&color=gradient" alt="header" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=24&pause=1000&center=true&vCenter=true&width=900&lines=Build+smart+timetables+in+seconds;Change+days%2C+periods%2C+and+subjects+live;Deterministic+generation+without+AI+calls" alt="typing animation" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/almostalok/Time-table-managment?style=for-the-badge&logo=github" alt="stars" />
  <img src="https://img.shields.io/github/forks/almostalok/Time-table-managment?style=for-the-badge&logo=github" alt="forks" />
  <img src="https://img.shields.io/github/issues/almostalok/Time-table-managment?style=for-the-badge&logo=github" alt="issues" />
  <img src="https://komarev.com/ghpvc/?username=almostalok&repo=Time-table-managment&style=for-the-badge" alt="views" />
</p>

## Overview

Timetable Management is a Next.js + Tailwind app for generating class timetables from user input in real time.

### Current capabilities

- Dynamic timetable generation from configurable:
  - Number of days
  - Periods per day
  - Subject entries (name, teacher, room, weekly classes)
- Deterministic scheduling logic (no external AI/API calls)
- Editable subject list with add/remove actions
- Responsive table-based output for generated schedule

---

## Tech Stack

- **Framework:** Next.js 15
- **UI:** React 19 (RC), Tailwind CSS
- **Server-ready dependencies:** Express, Passport, express-session, CORS, cookie-parser
- **Database driver:** MySQL (`mysql`)
- **Auth/Security packages:** passport-local, bcrypt

---

## Quick Start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run in development:

   ```bash
   npm run dev
   ```

3. Open:

   ```text
   http://localhost:3000
   ```

---

## Scripts

- `npm run dev` — start development server
- `npm run build` — build for production
- `npm run start` — run production server
- `npm run lint` — run lint checks (first run may ask to initialize ESLint config)

---

## Environment Variables

Create `.env.local`:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=timetable_db
SESSION_SECRET=change_this_secret
```

---

## Project Snapshot

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=almostalok&repo=Time-table-managment&theme=transparent" alt="repo stats" />
</p>

---

## Contributing

1. Create a feature branch
2. Keep changes focused
3. Run `npm run build` and `npm run lint`
4. Open a PR with a clear summary and testing notes
