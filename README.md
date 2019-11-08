# jwt-poc

yarn install

## Start the app in development mode using yarn run dev.<br />
To get started, go to postman - or other api service.<br />
The server is hosted on port:3000<br />

## 1. Navigate to the /api/login endpoint using the POST verb:<br />

Here we have simulated user validation for testing purposes.<br />
Complete the POST, and it should return:<br />

"token": "`<copy this>`"<br />

Copy this token, it has an expiration set at 30s.<br />

## 2. Navigate to the /api/posts endpoint using the POST verb:<br />

In the headers, add an Authorization field, and enter `Bearer <paste token here>`.<br />
<br />
Complete the POST, it should return the user data and timestamps of when the bearer token was<br />
created and when it will expire.<br />

### TODO: Add /api/register endpoint<br />
