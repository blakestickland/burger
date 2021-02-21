const express = require("express");
const exphbs = require('express-handlebars');

// Import routes.
const routes = require('./controllers/burger_controller.js');

// Set PORT; dynamic for deployment to Heroku.
const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the 'public' directory in the application direcctory.
app.use(express.static('public'));

// Parse request body as JSON.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Give the server access to them.
app.use(routes);

// Set up Express to listen to the PORT.
app.listen(PORT, () => console.log(`App now listening at localhost:${PORT}`));
