# README

# Rock Paper Scissors - React Frontend

## Overview

This is the react frontend for a simple Rock Paper Scissors app.

I used these docs for reference:
https://reactjs.org/
https://create-react-app.dev/

Backend Repo: 
https://github.com/Jess-White/rock-paper-scissors-rails-backend
Frontend Repo:
https://github.com/Jess-White/rock-paper-scissors-react-frontend

The frontend is configured to run on http://localhost:3001
(To double-check or change, check the scripts in the package.json file: scripts: "start": "PORT=3001 react-scripts start")
The backend is configured to run on http://localhost:3000
(To double-check or change, check cors.rb: origins 'localhost:3001')

This app includes:
--App.js
--Components:
    --GamePlayPrompt.js
    --GameTypePrompt.js
    --NoThanksMessage.js
    --PlayerNamePrompt.js
    --ResultsDisplay.js
    --WelcomeMessage.js

All components are imported into App.js and rendered conditionally using the GameDisplay function.
There is no router; this is a one-page application.

This app is built using functional components, useState, and useEffect.
This is a good basic reference for react hooks:
https://reactjs.org/docs/hooks-overview.html

This app uses axios to make API requests:
https://axios-http.com/
All requests can be found in src/Services/PlayerService.js

This app also uses react-query - react-query is designed to work with an HTTP client like axios:
https://react-query.tanstack.com/

react-query requires a QueryClientProvider to wrap the application. 
In this app, the QueryClientProvider is in index.js

react-query is separated into useQuery, which handles queries (index, show) and useMutation, which handles mutations (create, update, delete)
This app uses useQuery for getPlayer(:id) and getPlayers
This app also uses useMutation for createPlayer(newPlayerFields) and updatePlayer(:id, playerFields)

These pages are a helpful reference for syntax:
https://react-query.tanstack.com/guides/queries
https://react-query.tanstack.com/guides/mutations

## Installation

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
