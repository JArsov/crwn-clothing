# crwn-clothing

e-shop application built with React & Node.js.

## Installing packages

After cloning the repository, you need to install the packages required. This can be done by running:

- 'yarn' or 'npm install' in the project's root directory (to install server's packages)
- 'yarn' or 'npm install' in the '/client' directory (to install client's packages)

## Running the application

The application can be started by running 'yarn dev' or 'npm run dev' accordingly. This command starts both the front-end
and back-end applications.

If you want to start the client app only, then 'yarn client' or 'npm run client' should be used, but have in mind that you will not be able to make a payment because payments are being handled by the server. In the same way, if you want to run the server only, 'yarn server' or 'npm run server' should be used.

### Setting up the back-end

The user using the application must have a valid stripe account. To make the payments work correctly, you should create a '.env' file in the root directory with the following content:

```Javascript
  STRIPE_PUBLIC_KEY=pk_test_...
  STRIPE_SECRET_KEY=sk_test_...
```

The values of the keys (STRIPE_PUBLIC_KEY and STRIPE_SECRET_KEY) should be replaced with your own public and secret keys from stripe (which can be found on the stripe dashboard).

## Testing

React-testing-library is used for testing the client application. In order to run the unit tests for the client app,
run 'yarn test-client' or 'npm run test-client' in the projects root directory.

### \*Note

All other scripts can be found in either root's package.json or client's package.json file.
