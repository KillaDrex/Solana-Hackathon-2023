
require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const users = require('./users');

const PORT = process.env.PORT;
const secret = process.env.JWT_SECRET;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


async function authToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
    if (err) {
      console.error(err);
      return res.sendStatus(403);
    }
    try {
      req.user = {
        UserID: decodedToken.UserID,
      };
      next();
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  });
}

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Incorrect login credentials' });
    }

    const token = jwt.sign({ username }, secret, { expiresIn: '1h' });

    res.json({ token });
  });

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  const token = jwt.sign({ email }, secret, { expiresIn: '1h' });

  res.json({ token });
});

app.post('/hello', authToken, (req, res) => {
  const { username } = req.user;
  res.send('Hello from POgi.CO API!');
});


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
