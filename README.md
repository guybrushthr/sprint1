Simple To-Do-List to add tasks and mark them as done.

Based on classes in Typescript
Tested with jest
Executable in HTML
src/ toDoListDosClases.html is connected to toDoList.js (which does not include command "export" from toDoList.ts)

Push to github automatically executes Jest in github actions.

La configuración del debugger points to src/toDoList.ts

Project based on this template: https://github.com/jclumbiarres/tsbasico

ESLint
Prettier
ts-jest
nodemon
VSCode Debugging
Github Actions
with the following indications:

Comandos:

Testing:

```sh
npm run test
```

Ejecuta los tests ignorando los que existan en dist/

Prettier format:

```sh
npm run prettier-format
```

Ejecuta manualmente el prettier en el proyecto, recomiendo instalar la extensión prettier y que se autoejecute al guardar.

Watcher:

```sh
npm run dev:watcher
```

Ejecuta nodemon usando src/index.ts como archivo inicial

Dev Run:

```sh
npm run dev:run
```

Ejecuta el proyecto sin watcher

Build:

```sh
npm run build
```

Transpila el proyecto en dist/

---

## Debugger

en el archivo .vscode/launch.json está la configuración del debugger.

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Lanza debug",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/src/index.ts",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```
