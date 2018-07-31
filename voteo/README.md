# Voteo

Voteo is a voting web system build on the nOS blockchain using angular 6 on the frontend. Users can create polls or vote on pools. The created pools have got multiple settings. They can be public or private. When private the user can add wallet addreses which can vote. There are multiple settings which will be possible to set later on. The project is being worked on.

## Install dependencies
To run the applicaiton you will need Node. For installing run command `npm install` when in the frontend directory. This will install all the dependencies automatically.
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
## Connecting with a smartcontract
In the directory `app/src/shared` is a file `Methods.ts`. In this file is a static variable `scriptHash` where is the current smartcontract script hashm which is being added automatically into all requests.

In the directory `app/nos-wrapper` is a simple module which is wrapping the nOS client functions (invoke, testInvoke,...). This methohds are being used by the application for invoking the smartcontract from the services.
