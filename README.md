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
- **Eslint Advanced Configuration**: Tailored Eslint configurations for consistent code quality.
- **React-JSS Advanced Configuration**: Configured React-JSS for optimal performance.
- **Memorized Selectors in Redux Toolkit**: Enhanced application performance through optimized Redux selectors.
- **Git Workflow and GitHub Actions**: Streamlined CI/CD processes with Git workflows and GitHub Actions.
- **Localization with I18next**: Implemented localization for a globally accessible user experience.
- **Husky Integration**: Integrated Husky for maintaining code consistency.
- **Commitizen for Standardized Commit Messages**: Enforced standardized commit message formats.

## Conclusion
With a comprehensive skill set and a strong foundation in React and TypeScript, this developer is capable of building complex, scalable, and maintainable applications.


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
