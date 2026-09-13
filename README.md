# DevStack 🧱

A React app to browse dev technologies and build your own stack by adding
or removing them from a sidebar.

## Tech Used
React.js, TypeScript, CSS, React-Toastify, JSON, Vite

## Features
1. **Add / Remove Stack** — Add, remove, or clear all. Duplicate add shows a warning.
2. **Toast Alerts** — react-toastify shows a toast for every action.
3. **Responsive** — Mobile hamburger menu, grid adjusts 3 → 2 → 1 columns.

## React Questions

**1. What is JSX and why is it used?**
HTML-like syntax inside JS. Easier to read/write than `React.createElement()`.

**2. Props vs state?**
Props come from the parent and can't be changed. State is a component's own data that can change.

**3. What does `useState` do, and where did you use it?**
Stores a value and re-renders on change. Used for `myStack`, `loading`, and the mobile menu toggle.

**4. What does `useEffect` do, and why for the JSON data?**
Runs code after render (side effects). Needed so the JSON loads once, not on every render.

**5. Why does `.map()` need a unique `key`?**
So React can track each item correctly between re-renders. Used `tech.id`.

**6. What is conditional rendering? Give an example.**
Showing different UI based on a condition — e.g. "Your stack is empty" when `myStack.length === 0`.

**7. How does parent-child data flow work?**
Parent → child via props. Child → parent by calling a function passed down as a prop.