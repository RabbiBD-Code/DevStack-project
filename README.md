# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.



**# Dev Stack**
**Project Description**

Dev Stack is a web-based platform where users can explore different web development technologies and discover useful resources for learning and improving their programming skills. It provides a clean and responsive interface to explore technologies and build knowledge in web development.

**Technologies Used**
**React
TypeScript
Tailwind CSS
DaisyUI
React Icons
Vite**
3 Features
Explore Technologies – Users can explore different web development technologies and view their details.
Technology Stack Management – Users can add technologies to their stack and manage their selected technologies.
Responsive Design – The website is responsive and works smoothly on mobile, tablet, and desktop devices.


1**. What is JSX, and why is it used in React?**

JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript.

It is commonly used in React to describe the UI (User Interface) of a component.

2**. What is the difference between props and state?**
props:
props are read-only
props child component cannot driectly modify props
Data is passed from parent child

State:
stale can be changed
state changd using a satter function
data is mangaged inside a component


3**.What does the useState hook do, and where did you use it in this project?**
useState is a React Hook that allows us to create and manage state (changeable data) inside a functional component.

**4 .What does the useEffect hook do, and why did you need it to load the JSON data?
**
useEffect is a React Hook used to perform side effects in a component, such as fetching data, calling an API, setting up event listeners, or interacting with the browser.

**5 .Why does every item in a .map() list need a unique key prop?**

**6 React needs a key to uniquely identify each item in a list.**

What is conditional rendering?

Conditional rendering means displaying different UI based on a condition.

**7 How do you pass data from a parent to a child component, and how does a child send something back to the parent?**

React uses props to pass data from a parent to a child.
A child doesn't directly change the parent's state. Instead, the parent passes a function as a prop to the child.