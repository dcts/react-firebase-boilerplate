const Home = () => {
  return (
    <div className="home-container">
      <h1><a className="remove-all-link-styling underscore" href="https://github.com/dcts" target="_blank">DCTS</a> Firebase React BoilerPlate</h1>
      <h2>Next Steps</h2>
      <ul className="todo-list">
        <li>create a new firebase project, make sure firestore and storage are initialized</li>
        <li>create a new webapp for this project, and update config in `src/components/App.js`</li>
        <li>export admin sdk credentials file from firebase console and upload to folder backend/credentials</li>
        <li>set `credentialFileName` in `init-dev-env.js`</li>
        <li>set `storageBucketName` in `init-dev-env.js` by opening firebase console =&gt; storage =&gt; copy the storage id</li>
        <li>test if the dev environment loads</li>
        <li>connect firebase: `firebase login`, then run `firebase init` and choose `existing project`.</li>
        <li>run `npm run deploy` to deploy the frontend.</li>
        <li>run `firebase deploy --only functions` to deploy testfunctions</li>
        <li>you are ready to go! 🥳</li>
      </ul>
    </div>
  );
};

export default Home;
