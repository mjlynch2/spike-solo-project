const express = require ('express');
const bodyParser = require('body-parser');
const router = require('./routes/item.router')

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/item', router);

// Serve back static files by default
app.use(express.static('build'))

// Start listening for requests on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});
