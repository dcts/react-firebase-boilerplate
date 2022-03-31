const Home = () => {
  return (
    <div className="home-container">
      <h1><a className="remove-all-link-styling underscore" href="https://github.com/dcts" target="_blank">DCTS</a> Firebase React BoilerPlate</h1>
      <h2>Next Steps</h2>
      <ul className="todo-list">
        <li>run npm install</li>
        <li>create a new firebase project, make sure firestore and storage are initialized</li>
        <li>create a new webapp for this project, and update config in `src/components/App.js`</li>
        <li>connect firebase: `firebase login`, then run `firebase init` and choose `existing project`. Chose `dist` folder to be public folder and configure as SPA. Decline to override index.html if it already exists.</li>
        <li>replace project name inside .firebaserc</li>
        <li>replace project name inside `package.json`</li>
        <li>replace `short_name` and `name` inside `public/manifest.json`</li>
        <li>change title and description meta tags inside public/index.html</li>
        <li>probably you need to run `npx browserslist@latest --update-db`</li>
        <li>test if your app works by running `npm run start`</li>
        <li>run `npm run deploy` to deploy the frontend</li>
        <li>you are ready to go! 🥳</li>
      </ul>
    </div>
  );
};

export default Home;
