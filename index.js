const express      = require("express");
const bodyParser   = require('body-parser');
const cors         = require('cors');
const corsOptions  = require("./helpers/corsOptions");
const jwt          = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');
const path = require('path');
const app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors(corsOptions));

///app.use(jwt());

app.use('/auth', require('./controllers/auth.controllers'));
app.use('/users', require('./controllers/user.controllers'));

app.use('/special-categories', require('./controllers/special-category.controllers'));

app.use(errorHandler);

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/public', 'index.html'));
// });

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

