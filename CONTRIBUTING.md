# Contributing

## Setting up locally
1. Fork and clone the repo locally.
2. This project requires nodejs version `12.9` to work properly. You can use [nvm](https://github.com/nvm-sh/nvm) to set node version.
3. Install dependencies.
```sh
npm install
```
4. Bootstrap the project. This project uses [lerna](https://github.com/lerna/lerna) to manage packages. Lerna with install package dependencies while running this command.
```sh
npm run bootstrap
```
5. To start the project locally run the following command. This will run the packages in watch mode and start the docs running at [http://localhost:8000/](http://localhost:8000/). You can also use lerna `--scope` to limit the watch to required packages.
```sh
npm start
```
6. To run tests run.
```sh
npm run test
```
7. To run linter run.
```sh
npm run lint
```

## Pull requests
PRs are always welcome. Make sure you put a readable name for your pr as this will be used as a commit message when sqash and merge. Also try to fill some information in the PR description, this can help the PR reviewer to understand PR easily.