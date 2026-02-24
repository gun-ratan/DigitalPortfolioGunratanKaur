# Copilot instructions for this repository

Purpose
- Short, actionable guidance for AI coding agents working on this simple static portfolio.

Big picture
- This is a static front-end site. The entrypoint is `index.html` at the repository root. Client-side logic lives in `js/script.js`. Global styles are in `styles.css`.
- No build system, package manager, or test harness is present. Changes should remain lightweight and browser-first.

Key files & patterns (examples)
- `index.html`: single HTML entry. If you add script or stylesheet tags, update this file accordingly.
- `js/script.js`: plain ES5/ES6 browser script. Prefer DOM-friendly, dependency-free edits here.
- `styles.css`: top-level stylesheet. Keep layout and theme rules here unless adding a new CSS module.

Developer workflows
- Local preview: open `index.html` in a browser or serve the folder with a static server (e.g., `npx http-server .`).
- No build step: do not introduce Node/tooling without explicit approval. If you propose adding `package.json` or CI, describe the rationale in the PR.

Conventions & constraints
- Keep changes minimal and reversible: small commits that edit only the files required for a feature/bugfix.
- Avoid adding global frameworks or transpilation. This repo expects plain static assets.
- If you add new assets, place them under `js/` or the repo root and update `index.html`.

Integration points
- There are currently no external APIs or back-end integrations. If adding integrations, document credentials and environment assumptions in the PR description.

When you edit code
- Show a concise code diff in PRs and explain why the change is safe for a static site.
- Example: to add a click handler, edit `js/script.js` and keep DOM selectors tied to IDs or classes present in `index.html`.

What to ask the repo owner
- Permission to add tooling (Node, linters, CI).
- Preferred branching/PR naming and review expectations.

If something looks missing
- This repo has no tests or CI. Propose a minimal test or static-check plan in the PR description before adding it.

Contact
- Ask the repo owner for design assets, accessibility requirements, or deployment targets before major UI changes.

---
Please review and tell me which parts need more detail or examples. I can expand with targeted snippets from `index.html` or `js/script.js` if you want.
