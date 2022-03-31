# React-Firebase-Boilerplate

ONLY FRONTEND CODE.

## Setup Guide

- [ ] run npm install
- [ ] create a new firebase project, make sure firestore and storage are initialized
- [ ] create a new webapp for this project, and update config in `src/components/App.js`
- [ ] connect firebase: `firebase login`, then run `firebase init` and choose `existing project`. Chose `dist` folder to be public folder and configure as SPA. Decline to override index.html if it already exists.
- [ ] replace project name inside .firebaserc
- [ ] replace project name inside `package.json`
- [ ] replace `short_name` and `name` inside `public/manifest.json`
- [ ] change `<title></title>` and `description`-metatag inside `public/index.html`
- [ ] probably you need to run `npx browserslist@latest --update-db`
- [ ] test if your app works by running `npm run start`
- [ ] run `npm run deploy` to deploy the frontend
- [ ] you are ready to go! 🥳

## Deploy Frontend

```bash
npm run deploy # builds react project and deploys to firebase hosting
```

## Command History
**all bash commands used to create this boilerplate**
(**(CREATED WITH CREATE REACT APP)**)[https://github.com/facebook/create-react-app]
```bash
npx create-react-app react-firebase-boilerplate --use-npm
npm install react-router-dom
npm install react-icons
npm install firebase
npm install node-sass
```
