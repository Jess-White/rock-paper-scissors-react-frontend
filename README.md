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

This app is built using functional components, useState, and useEffect.

This is a good basic reference for react hooks:
https://reactjs.org/docs/hooks-overview.html

This app uses axios to make API requests:
https://axios-http.com/
All requests can be found in src/Services/PlayerService.js

This app also uses react-query - react-query is designed to work with an HTTP client like axios: https://react-query.tanstack.com/

react-query requires a QueryClientProvider to wrap the application. 

In this app, the QueryClientProvider is in index.js:

```bash
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);

```

useQuery handles queries (index, show); useMutation handles mutations (create, update, delete)

This app uses useQuery for getPlayer(:id) and getPlayers

This app uses useMutation for createPlayer(newPlayerFields) and updatePlayer(:id, playerFields)

These pages are a helpful reference for react-query syntax:

https://react-query.tanstack.com/guides/queries

https://react-query.tanstack.com/guides/mutations

## Installation

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This page provides more information about installation:
https://create-react-app.dev/docs/getting-started/

You will need to run npm install or yarn install

```bash
# runs the app in localhost:3001:
"start": "PORT=3001 react-scripts start"
# builds the app for production:
"build": "react-scripts build"
# runs the test suite:
"test": "react-scripts test"
# removes build dependency:
"eject": "react-scripts eject"
# runs linter:
"lint": "eslint ."
```
