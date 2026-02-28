# Timetable Management

A web application foundation for managing academic timetables, built with Next.js and Tailwind CSS, with server-side dependencies prepared for authentication and database-backed scheduling workflows.

## Overview

This repository currently contains the core project configuration and dependencies needed to build a timetable management platform. It is set up as a Next.js application with a modern frontend stack and backend-oriented packages (Express, Passport, MySQL) available for integration.

## Tech Stack

- **Framework:** Next.js 15
- **UI:** React 19 (RC), Tailwind CSS
- **Backend-related packages:** Express, Passport, Express Session, CORS, Cookie Parser
- **Database driver:** MySQL (`mysql` npm package)
- **Auth/Security:** Passport Local, bcrypt

## Prerequisites

Make sure the following are installed:

- **Node.js** (LTS recommended, v20+)
- **npm** (ships with Node.js)

## Getting Started

1. Install dependencies:

	 ```bash
	 npm install
	 ```

2. Start the development server:

	 ```bash
	 npm run dev
	 ```

3. Open your browser at:

	 ```
	 http://localhost:3000
	 ```

## Available Scripts

- `npm run dev` – Start the Next.js development server
- `npm run build` – Build the app for production
- `npm run start` – Run the production server
- `npm run lint` – Run lint checks via Next.js

## Environment Variables

Create a `.env.local` file for local development and keep secrets out of version control.

Suggested variables (adjust to your implementation):

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=timetable_db
SESSION_SECRET=change_this_secret
```

> Note: `.env*` files are ignored by git in this repository.

## Current Project Status

The repository is currently in a **configuration-first** state (project setup and dependencies are present). Application feature directories (such as `app/`, `pages/`, or `components/`) are not yet committed in the current workspace snapshot.

## Suggested Next Structure

As implementation progresses, consider organizing the codebase like this:

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

## Contributing

1. Create a feature branch.
2. Keep changes focused and well-scoped.
3. Run `npm run lint` before opening a pull request.
4. Provide a clear PR description with testing notes.

## License

No license file is currently defined in this repository. Add a `LICENSE` file if you plan to distribute the project publicly.

##Links
Follow almostalok.tech for updates.
