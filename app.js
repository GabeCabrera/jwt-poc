const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000
const SECRET_KEY = 'hush'


/*  
  BEARER TOKEN FORMAT:
  Authorization: Bearer <access_token> 
*/

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined') {
    // Split at the ' '
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken
    // Continue
    next();
  } else {
    res.send('403: FORBIDDEN');
  };
};

app.get('/api', (req, res) => {
  res.json({
    message: '/'
  });
});

app.post('/api/login', (req, res) => {
/*  
  Here you'd make a request to login and authenticate user. This is a mock user
  to simulate a validated user that has been successfully returned from the database. 
*/
  const user = {
    id: 1,
    username: 'user',
    email: 'user@fakedomain.com',
    password: 'password'
  };

  jwt.sign({user}, SECRET_KEY, {expiresIn: '25s' }, (err, token) => {
    res.json({
      token
    });
  });
});

app.post('/api/posts', verifyToken, (req, res) => {
  jwt.verify(req.token, SECRET_KEY, (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'User Authenticated & post created.',
        authData
      });
    }
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));