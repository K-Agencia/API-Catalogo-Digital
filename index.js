const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 3050;

const app = express();

const routes = require('./src/routes/routes.js');
const { errorHandling } = require('./src/midellware/errorHandling.js');

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({
   extended: false
}));
app.use(express.json());

app.use(routes);
app.use(errorHandling);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));