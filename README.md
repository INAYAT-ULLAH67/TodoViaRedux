# Todo via Redux 📝

A simple, clean **Todo application** built with **React** and **Redux Toolkit**, styled with **Tailwind CSS** and powered by **Vite**.

This project demonstrates core Redux Toolkit concepts — slices, reducers, and actions — through a small, real-world CRUD app: adding, editing, and deleting todo items.

## Features

- ➕ **Add** new todos
- ✏️ **Edit** existing todos in a modal dialog
- 🗑️ **Delete** todos
- ⚡ Global state managed with **Redux Toolkit** (`createSlice`, `nanoid`)
- 🎨 Responsive UI styled with **Tailwind CSS v4**
- ⚙️ Fast dev/build tooling with **Vite**

## Tech Stack
| State Management | [Redux Toolkit](https://redux-toolkit.js.org/) + [React Redux](https://react-redux.js.org/) |
| Styling          | [Tailwind CSS v4](https://tailwindcss.com/) |


## Project Structure

```
src/
├── app/
│   └── Store.js          # Redux store configuration
├── components/
│   ├── AddTodo.jsx        # Input form to add a new todo
│   └── Todo.jsx            # Renders the todo list + edit/delete UI
├── features/
│   └── TodoSlice.js       # Redux slice: state, reducers, and actions
├── App.jsx                # Root component
├── main.jsx                # App entry point, wraps App in <Provider>
└── index.css                # Tailwind import
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/INAYAT-ULLAH67/TodoViaRedux.git
   cd TodoViaRedux
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

   Then open the local URL Vite prints in your terminal.

### Other Scripts

| Command           | Description                          |
|--------------------|----------------------------------------|
| `npm run dev`      | Start the Vite dev server with HMR     |
| `npm run build`    | Build the app for production           |
| `npm run preview`  | Preview the production build locally   |
| `npm run lint`     | Lint the codebase with Oxlint          |

## How It Works

Redux state lives in a single `todo` slice (`src/features/TodoSlice.js`) with three actions:

- `addTodo` — appends a new todo with a unique id (`nanoid`)
- `removeTodo` — filters a todo out by id
- `updateTodo` — finds a todo by id and updates its text

Components read from the store with `useSelector` and dispatch actions with `useDispatch`, following standard Redux Toolkit patterns.

> **Note:** Todos currently live only in memory (Redux state) and reset on page refresh. Adding `localStorage` persistence would be a natural next step.

## Roadmap Ideas

- [ ] Persist todos to `localStorage`
- [ ] Mark todos as complete/incomplete
- [ ] Filter todos (all / active / completed)
- [ ] Add a confirmation step before deleting

## License

No license has been specified yet for this project.
