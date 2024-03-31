# Advanced React Application

## Skills
- **React**: Proficient in crafting sophisticated React applications.
- **TypeScript**: Experience in utilizing TypeScript for type safety and enhanced development.
- **React-JSS**: Demonstrated expertise in configuring React-JSS for dynamic styling solutions.
- **Redux/Toolkit**: Proficient in state management using Redux, particularly with Redux Toolkit.
- **Redux-Persist**: Experience in persisting Redux state across sessions.
- **I18next**: Implemented localization features for multi-language support.
- **Husky**: Integrated Husky for enforcing pre-commit and pre-push hooks.
- **GitHub Workflows**: Orchestrated Git workflows for streamlined collaboration.
- **Eslint (Airbnb, Airbnb-Typescript)**: Implemented advanced Eslint configurations for consistent code quality.

## Key Achievements
- **Eslint Advanced Configuration**: Implemented advanced Eslint configurations tailored to the project requirements, ensuring consistent code quality and adherence to best practices throughout development cycles.
- **React-JSS Advanced Configuration**: Demonstrated expertise in configuring React-JSS for optimal performance and maintainability, harnessing the power of CSS in JS for dynamic styling solutions.
- **Memorized Selectors in Redux Toolkit**: Engineered optimized Redux selectors using the Memorized Selector pattern within Redux Toolkit, enhancing application performance by efficiently computing derived state.
- **Git Workflow and GitHub Actions**: Orchestrated Git workflows and leveraged GitHub Actions for streamlined CI/CD processes, facilitating seamless collaboration and continuous integration within the development team.
- **Localization with I18next**: Implemented localization features using I18next for seamless multi-language support, ensuring a globally accessible user experience.
- **Husky Integration**: Integrated Husky into the development workflow for enforcing pre-commit and pre-push hooks, maintaining code consistency and preventing potential issues early in the development lifecycle.
- **Commitizen for Standardized Commit Messages**: Utilized Commitizen to enforce standardized commit message formats, promoting clarity and coherence in version control history.





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
