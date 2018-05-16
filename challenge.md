# Frontend dev challenge

You have to implement a basic frontend application with the latest version of [Angular](https://github.com/angular/angular) and [ngrx library](https://github.com/ngrx/platform).

The only feature that must be implemented is the LoginComponent, that it has to handle the login workflow and send network requests to the included webserver.

The protocol requires to pass a HTTP header with the token that you receive when calling the `/login` method.
The header must be in this form in order to send authenticated requests:

`Authorization: Bearer <TOKEN_RECEIVED_FROM_LOGIN>`

A `/challenge` method also exists and checks if the header was set up correctly so the LoginComponent should have a button to effectively check if the user is logged in.

OPTIONAL: handle logout calling `/logout` method and clearing the token in the browser, effectively logging out the user.

To launch the server just type:
`npm install && npm start` in the root directory of the challenge.

Time limit:

- one week: if the candidate is not a full time worker
- two weeks: if the candidate is a full time worker