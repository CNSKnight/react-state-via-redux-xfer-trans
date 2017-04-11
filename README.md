This exersize was created with Node 6.8.0, and React@15.5.3/Redux@3.6.0 with jsx templates and Babel transpiling, and includes redux-persist@4.6.0, Material Design inspired SaSS styling, and a Webpack build.

We're also tooled up for testing with Jest but tests are currently incomplete.

## What is it?

Here is an online bank transfer POC with an App component, and two primary sub-components, `transfer` and `transactionsHistory`. 

Components are organized in typical React/Redux `container pattern`, with separate index, component, and reducer scripts. 

App brings all of the reducers together, and provides this as `{appReducers}` to src/index.js which generates a redux `store` and provides it to the app through the ReactDOM.render bootstraping function.

The `transfer` containers XferForm component persists all activity in the transfer form and provides some input validation. It listens for actions by the user and dispatches these actions to it's reducer to update state. XferForm may dispatch input value changes, a form submit, or a preview confirmation to dispatch a new transfer transaction.

the transfer reducer primes its store with some contrived values for its' fromAcct and balance values.

The `transactionsHistory` containers TransHistory component listens for an action to dispatch either an action to prepend a new transaction to its' history, or to rerender its' listing whenever updated.

The transactionsHistory reducer primes its' store with some provided transactions stored locally in a .json file. Thereafter, it's store is primed through redux-persist local storage.

A single-state screenshot is provided in the repository.


## Scripts How-to's

To run the app:

 `git clone` onto a machine with Nodejs installed.

Run `npm install`.

Run `npm start`

This will run the app in your default browser in development mode.<br>
Otherwise, open [http://localhost:3000](http://localhost:3000) in your preferd browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Currently fails with a non-descriptive error.

#### Assignment issues:
- Icon artifacts provided do not match the test_design comps
- Preview screen described is not included in comps
