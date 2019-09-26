// requires node modules express and morgan
const express = require('express');
const morgan = require('morgan');

// creating variable 'app' that renders our page using express
const app = express();

//connect db from index.js using sequelize
const models = require('./models');

//verify that connection to db works
// db.authenticate().then(() => {
//   console.log('connected to the database');
// });

// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));
// parses json bodies
app.use(express.json());
// adds the console.logs for each request
app.use(morgan('dev'));
// serves up static files from public folder
app.use(express.static(__dirname + '/public'));

const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Wikistack</title>
  <link rel="stylesheet" href="/stylesheets/style.css" />
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>
`;
// root directory will render the following
app.get('/', (req, res, next) => {
  res.send(html);
});

// async .sync mothod
const sync = async () => {
  await models.db.sync();
};

sync({ force: true });

//port
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
