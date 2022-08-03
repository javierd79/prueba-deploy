const express = require('express');
const { restart } = require('nodemon');
const app = express();
const port = 3000;
const postsRouter = require('./src/routes/posts');
const morgan = require('morgan');

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/posts", postsRouter);

app.get('/*', (req, res) => {
  res.json({ message: "Not found" });
});

app.use(morgan('tiny'));


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});