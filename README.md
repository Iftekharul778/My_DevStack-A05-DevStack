DevStack 🧱

This is my assignment project — a small React app where you can browse different web development technologies (React, Node, PostgreSQL, etc.) and "build" your own stack by picking the ones you like. I built this to practice React basics like components, props, state, and hooks.

The idea: you look at technology cards, click "Add to Stack" on the ones you want, and they show up in a sidebar called "Your Stack". You can also remove them one by one or clear everything at once.

Tech I used
React (with Vite)
CSS (plain, no framework — just wrote my own classes)
react-toastify (for the little popup alerts)
A JSON file for the technology data instead of hardcoding it
Features
Add / Remove from stack — Clicking "Add to Stack" adds a technology to the sidebar. If you click it again on the same one, it just warns you instead of adding a duplicate. You can also remove a single item or clear the whole stack with "Remove All".
Toast alerts — Instead of using the boring browser alert(), I used react-toastify so every action (add / duplicate / remove / remove all) shows a small notification in the corner.
Responsive layout — The navbar turns into a hamburger menu on mobile, and the technology cards go from 3 columns on desktop down to 1 column on small screens.

Honestly this was my first time really using useEffect for data fetching and managing an array in state, so some parts took a few tries to get right 😅

React Questions (my own answers)

1. What is JSX, and why is it used in React? JSX is basically writing HTML-looking code inside JavaScript. Instead of writing React.createElement("div", ...) every time, you just write <div> and it gets compiled to that behind the scenes. It's used because it's just way easier to read and write than plain JS function calls, especially when you have nested elements.

2. What is the difference between props and state? Props are values passed into a component from its parent, and the component can't change them — it just reads them. State is data that lives inside the component itself and can change, usually because of something the user does. In my project, the technology object I pass into a card is a prop, but the myStack array is state because it changes when you click buttons.

3. What does the useState hook do, and where did you use it in this project? useState lets a component keep track of a value and re-render when it changes. I used it for myStack (the list of added technologies), loading (whether the data has finished loading), and isOpen in the navbar (whether the mobile menu is open or not).

4. What does the useEffect hook do, and why did you need it to load the JSON data? useEffect runs some code after the component renders, and it's used for things that aren't really part of rendering, like fetching data. I needed it because fetching the JSON file is a side effect — I don't want it running on every render, just once when the Technologies component first shows up. So I used useEffect with an empty dependency array [].

5. Why does every item in a .map() list need a unique key prop? React uses the key to figure out which item is which between re-renders, so it doesn't get confused about what changed, what got added, or what got removed. Without it React just warns you in the console and can end up updating the wrong DOM element. I used tech.id as the key since every technology has a unique id in the JSON data.

6. What is conditional rendering? Show one place you used it (example: the empty stack message). It just means showing different things depending on some condition, instead of always showing the same UI. I used it in the "Your Stack" panel — if myStack has zero items, it shows "Your stack is empty," otherwise it renders the actual list with .map().

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent? Parent to child is easy — you just pass it as a prop, like <TechCard technology={tech} />. Going the other way (child to parent) is done by passing a function down as a prop too, like onAdd={handleAddToStack}. The child calls that function when the button is clicked, and since the function was defined in the parent, it can update the parent's own state. That's how the card button tells the main component "hey, add this one."


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
