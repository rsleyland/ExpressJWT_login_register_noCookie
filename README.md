# ExpressJWT_login_registration_noCookie
Basic setup for node js + express. Uses JWT for authentication. 
Server has baseuser, user and admin accounts. Baseuser acts as super class for all other account types.

- Node v16.14.0
- Express V4.17.3

### Setup
`git clone git@github.com:rsleyland/ExpressJWT_login_registration_noCookie.git`

`cd ExpressJWT_login_registration_noCookie`

`npm install`

`npm start`

### Configuration:
.env variables need to be filled - i.e DB connection uri, JWT secret, JWT expiry time
### Additional:
Uses npm package nodemon to automatically update node application when changes are made.

Use `npm install -g nodemon` to globally install nodemon package

otherwise change ln.7 in package.json to `"start" : "npm run server.js"`
