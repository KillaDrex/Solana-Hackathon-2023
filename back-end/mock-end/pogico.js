require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const router = jsonServer.router('db.json'); 
const PORT = process.env.PORT;
const secret = process.env.JWT_SECRET;

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function authToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, secret, (err, decodedToken) => {
    if (err) {
      console.error(err);
      return res.sendStatus(403);
    }
    req.user = {
      username: decodedToken.username,
    };
    next();
  });
}

app.post("/hello", authToken, (req, res) => {
  const { username } = req.user;
  res.send(`Hello, ${username} from your server!`);
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;


  const user = router.db.get('users').find({ username }).value();

  if (user) {
    if (user.password === password) {
  
      const token = jwt.sign({ id: user.id , username}, secret);
      res.status(200).json({ message: 'Login Success', token });
    } else {
      res.status(401).json({ message: 'Incorrect username or password' });
    }
  } else {
    res.status(404).json({ message: 'Username not found' });
  }
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Username and password are required" });
    return;
  }

  const maxId = router.db.get("users").maxBy("id").value();

  const newId = maxId ? maxId.id + 1 : 1;
  const existingUser = router.db.get("users").find({ username }).value();

  if (existingUser) {
    res.status(409).json({ message: "Username already exists" });
    return;
  }

  const newUser = { id: newId, username, password };

  router.db.get("users").push(newUser).write();

  res.status(201).json({ message: "Signup success" });
});


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
