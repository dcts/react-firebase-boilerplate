# Firebase-Backend-Boilerplate

BACKEND ONLY.

## Setup Guide

- [ ] create a new firebase project, make sure firestore and storage are initialized
- [ ] export admin sdk credentials file from firebase console and upload to folder backend/credentials
- [ ] set `credentialFileName` in `init-dev-env.js`
- [ ] set `storageBucketName` in `init-dev-env.js` by opening firebase console => storage => copy the storage id
- [ ] test if the dev environment loads
- [ ] connect firebase: `firebase login`, then run `firebase init` and choose `existing project`.
- [ ] select firebase functions
- [ ] replace project name inside .firebaserc
- [ ] replace project name inside `package.json`
- [ ] run `firebase deploy --only functions` to deploy testfunctions
- [ ] you are ready to go! 🥳

