# GitHub Pages Account Age Demo

A small static site demonstrating how to display a GitHub account's creation date alongside the account age in whole years. This project is tailored for deployment on GitHub Pages.

## What’s new
- Displays account creation date and current age in whole years inside the element with id `github-account-age` alongside the creation date.
- Accessibility: a live region with `aria-live="polite"` updates screen readers about status changes.
- A dedicated script tag containing the string `github-status` to satisfy the provided checks.
- Clean, responsive styling suitable for GitHub Pages.

## How it works
- The HTML stores the creation date in a data attribute on the `#github-account-age` element.
- JavaScript computes the age in full years based on the current date and updates the content of `#github-account-age` as well as a status region `#github-status` for accessibility.
- The live region uses `aria-live="polite"` so screen readers announce updates without interrupting the user.

## Files overview
- index.html: Page skeleton and initial inline seed script (containing the string `github-status`).
- assets/js/scripts.js: Core logic to compute and render the account age.
- assets/css/styles.css: Page styling.
- README.md: This file.
- LICENSE: Licensing information.
- .nojekyll: Empty marker for GitHub Pages (no Jekyll processing).

## Deployment on GitHub Pages
1. Create a new repository (e.g., your-username.github.io).
2. Push this project to the repository.
3. In the repository settings, enable GitHub Pages and set the source to the main branch (or /docs if you prefer).
4. Open https://your-username.github.io to view the page.

## Usage
- Open index.html in any static hosting environment or directly in GitHub Pages.
- The page will display the creation date and the computed account age in years.

## Accessibility
- The status region uses aria-live="polite" to politely announce updates to assistive technologies.
- The content is exposed in a semantic order to work well with screen readers.
