# React Frontend

---

The frontend is built with Vite as the bundler, React as the UI Framework and TypeScript as the language

Please write all functionality in TypeScript, meaning the file extension must be .tsx and not .jsx

The provided folder structure is as follows

components

- For all components of the application

hoc

- High Order Components that wrap around the ordinary components to decrease writing the same functionality in all the components

hooks

- For  writing custom hooks to be reused in the application
- If you find yourself writing functionality over and over again make it into a hook

layouts

- For writing the various layouts of the application

pages

- For writing the different pages and to remove clutering a single component so that each page can have it's own separate components that can be isolated

redux

- For state management within the app
- Already configured the store
- Simply add the various reducers for each entity into the reducers config

services

- Writing the reducers and actions for the various entities within the application

utils

- For writing any utility functions for the application

To read the difference between hooks and functions, so you know when to write a hook and when to write a utility function, [click here](https://dev.to/jeetvora331/react-hooks-vs-functions-made-easy-2g2l)
