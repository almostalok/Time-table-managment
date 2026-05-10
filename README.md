# Timetable Management (aka “Please Stop Double-Booking Physics Lab”)

Welcome! This repo is the launchpad for a timetable management app built with **Next.js + Tailwind** and backend-ready dependencies for auth + database workflows.

Think of it as:  
**solid project setup now, feature chaos later (the fun kind).**

---

## What’s in here right now?

At the moment, this repository is in a **configuration-first** stage:

- Core Next.js setup ✅
- UI stack dependencies ✅
- Backend/auth/database-related packages ready ✅
- Full feature folders (`app/`, `pages/`, etc.) still cooking 🍳

So yes, this is the “assembled ingredients” phase, not the “served dinner” phase.

---

## Tech Stack

- **Framework:** Next.js 15
- **UI:** React 19 (RC), Tailwind CSS
- **Backend-related packages:** Express, Passport, express-session, CORS, cookie-parser
- **Database driver:** MySQL (`mysql`)
- **Auth/Security:** passport-local, bcrypt

---

## Prerequisites

Please install:

- **Node.js** (LTS recommended, v20+)
- **npm** (comes with Node.js)

---

## Quick Start (Speedrun Edition)

1. Install dependencies

   ```bash
   npm install
   ```

2. Start dev server

   ```bash
   npm run dev
   ```

3. Open:

   ```text
   http://localhost:3000
   ```

If the app had a personality, this is where it would say: “It works on my machine.”

---

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Run production server
- `npm run lint` — Run lint checks

---

## Environment Variables

Create a `.env.local` file for local development:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=timetable_db
SESSION_SECRET=change_this_secret
```

> `.env*` files are git-ignored in this repository.  
> Your secrets stay secret. Your timetable drama does not.

---

## Suggested Future Structure

As features are added, a structure like this may help:

```text
app/
  (routes and layouts)
components/
  (reusable UI components)
lib/
  (db, auth, helpers)
server/
  (express integration, middleware)
```

---

## Contributing

1. Create a feature branch
2. Keep changes focused
3. Run `npm run lint` before PR
4. Add a clear PR description + testing notes

Small PRs get reviewed faster and hurt fewer feelings.

---

## License

No license file is currently defined.  
If you plan to distribute this publicly, add a `LICENSE` file.

---

## Links

Follow **almostalok.tech** for updates.
