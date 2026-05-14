<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=180&text=Time%20Table%20Management&fontAlign=50&fontAlignY=35&desc=Dynamic%20Timetable%20Generator&descAlign=50&descAlignY=55&color=gradient" alt="header" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=24&pause=1000&center=true&vCenter=true&width=900&lines=Build+smart+timetables+in+seconds;Customize+days%2C+periods%2C+and+subjects+live;Deterministic+generation+without+external+AI+calls" alt="typing animation" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/almostalok/Time-table-managment?style=for-the-badge&logo=github" alt="stars" />
  <img src="https://img.shields.io/github/forks/almostalok/Time-table-managment?style=for-the-badge&logo=github" alt="forks" />
  <img src="https://img.shields.io/github/issues/almostalok/Time-table-managment?style=for-the-badge&logo=github" alt="issues" />
  <img src="https://komarev.com/ghpvc/?username=almostalok&repo=Time-table-managment&style=for-the-badge" alt="views" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=nextdotjs" alt="nextjs" />
  <img src="https://img.shields.io/badge/React-19_RC-149ECA?style=flat-square&logo=react" alt="react" />
  <img src="https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=flat-square&logo=tailwindcss" alt="tailwind" />
</p>

## 📚 Table of Contents

- [✨ Overview](#-overview)
- [🚀 Features](#-features)
- [🧰 Tech Stack](#-tech-stack)
- [⚡ Quick Start](#-quick-start)
- [🛠️ Scripts](#-scripts)
- [🔐 Environment Variables](#-environment-variables)
- [🧩 Project Snapshot](#-project-snapshot)
- [🤝 Contributing](#-contributing)

---

## ✨ Overview

**Time Table Management** is a Next.js + Tailwind app that helps you generate class timetables quickly from custom inputs.

It is focused on being:
- 🎯 **Simple to use**
- ⚡ **Fast to generate**
- 🔁 **Deterministic** (no external AI/API calls)

---

## 🚀 Features

- 📅 Configure number of days
- ⏱️ Configure periods per day
- 📘 Manage subjects with:
  - Subject name
  - Teacher
  - Room
  - Weekly class count
- ➕ Add/remove subjects instantly
- 🧾 Generate responsive, table-based timetable output

---

## 🧰 Tech Stack

- **Framework:** Next.js 15
- **UI:** React 19 (RC), Tailwind CSS
- **Server-ready dependencies:** Express, Passport, express-session, CORS, cookie-parser
- **Database driver:** MySQL (`mysql`)
- **Auth/Security packages:** passport-local, bcrypt

---

## ⚡ Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

3. **Open in browser**

   ```text
   http://localhost:3000
   ```

---

## 🛠️ Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Run production server
- `npm run lint` — Run lint checks (first run may ask to initialize ESLint config)

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=timetable_db
SESSION_SECRET=change_this_secret
```

---

## 🧩 Project Snapshot

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=almostalok&repo=Time-table-managment&theme=transparent" alt="repo stats" />
</p>

---

## 🤝 Contributing

1. Create a feature branch
2. Keep changes focused
3. Run `npm run build` and `npm run lint`
4. Open a PR with a clear summary and testing notes
