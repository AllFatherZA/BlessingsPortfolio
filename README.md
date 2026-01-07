# BlessingsPortfolio

A personal portfolio website built with React (Create React App). This repository contains the front-end sources (`src/` and `public/`) and is configured for deployment to GitHub Pages.

Live demo
- https://allfatherza.github.io/BlessingsPortfolio

Quick summary
- Framework: React (Create React App)
- Deployment: GitHub Pages via the `gh-pages` package (configured in package.json)
- Language: JavaScript (ESNext)

Table of contents
- About
- Tech stack
- Prerequisites
- Local development
- Build & Deploy
- Contact / Email form
- Contributing
- License

About

This project is a personal portfolio site that showcases projects and contact information. The project was bootstrapped with Create React App and includes UI libraries (Bootstrap) and utilities for handling contact forms and mail (EmailJS, nodemailer).

Tech stack
- React 18 (Create React App)
- Bootstrap 5, Bootstrap Icons
- React Router for navigation
- gh-pages for GitHub Pages deployment
- (Optional) nodemailer / express if you add a backend for sending mails

Prerequisites
- Node.js (recommend LTS, e.g. 18+) and npm installed\- Git (for cloning)

Local development
1. Clone the repo```bash
git clone https://github.com/AllFatherZA/BlessingsPortfolio.git
cd BlessingsPortfolio
```

2. Install dependencies```bash
npm install
```

3. Start the development server```bash
npm start
```
Open http://localhost:3000 in your browser. The app will hot-reload on changes.

Build & Deploy

Build for production:
```bash
npm run build
```

Deploy to GitHub Pages (package.json already configured with a `predeploy` and `deploy` script):
```bash
npm run deploy
```
This will publish the contents of `build/` to the `gh-pages` branch and serve it from the GitHub Pages site configured at the `homepage` field in package.json. If you need to change the homepage, update `package.json > homepage` to your desired URL.

Contact / Email form

This project includes front-end code that may integrate with EmailJS or a backend. There is no dedicated backend folder in this repository. If you plan to handle emails server-side, add a `server/` (or similar) directory with an Express app using `nodemailer` and protect credentials using environment variables.

Example environment variables for a backend server (do NOT store these in source control):
```bash
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-user
SMTP_PASS=your-pass
```
For EmailJS (client-side), keep your public keys in a secure place (do not commit secret keys).

Testing
- Run tests (if any):
```bash
npm test
```
Create React App has a built-in test runner; add unit tests under `src/__tests__` or alongside components.

Contributing
- Fork the repository\- Create a branch: `git checkout -b feature/my-change`
- Make changes and commit: `git commit -m "Add new feature"`
- Push and open a Pull Request

License
Add your license here (e.g., MIT). If you want me to add a LICENSE file I can create one for you.

Maintenance notes
- The package.json includes dependencies such as `express` and `nodemailer` but there is no backend folder in this repository. If you add a backend, keep it in a separate directory (`server/`) and include instructions here for running it.

Contact
Maintainer: https://github.com/AllFatherZA