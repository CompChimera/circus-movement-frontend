# circus-routine-app

Frontend Vue application to [circus-movement-rest-api](https://github.com/CompChimera/circus-movement-rest-api)

Build aerial circus routines with custom added tricks. 

## Purpose
To connect moves to different types of aerial apparatuses. Each apparatus will also have various types that are important distinctions. Gives flexibility to add apparatuses how the user wants. The aerial circus world is taught in so many different ways, and there are multiples ways to refer to both apparatuses and moves. (Example: Tissu vs Silks, and any number of studio grown titles for movements) Eventually app should have a default so new to circus users can jump in. V1 will be completely custom.

## Key Information involved:
### Apparatuses
These are the pieces of equipment that aerial acrobatics perform their moves (or tricks) on.

### Moves
A movement or trick that can be done on a corresponding apparatus. How these are executed can be effect by the type.

### Type - Not Yet Implemented
A piece of info to categorize the apparatuses. They are considered Soft Apparatuses (Ex. Silks, Rope, Straps, ect) or Hard Apparatuses (Ex. Trapeze, Lyra, Cubes). And to categories further, some of these equipment can be rigged using a single point, or double point, or other configurations that make it a distinctly different experience with different moves available.

## Later Development
*Structure to change as connections to API are implemented. Populating data directly in Vue at the moment.*

* Adding apparatuses is working.
* Framework for adding a new routine is added with default routine data. 
* Move frontend logic (display detail or add new) not implemented.

## Deployment
Deployment to GitHub Pages

Run `npm run deploy` within *Git Bash*. Windows Commandline doesn't prompt credentials accurately. 

Reference: https://mkay11.medium.com/how-to-deploy-your-vite-vue-3-application-in-github-pages-2023-2b842f50576a

## Setup
<details>
<summary>Vue Setup Readme</summary>

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
</details>