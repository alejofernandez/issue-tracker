var express            = require('express');
var app                = express();
var bodyParser         = require('body-parser');
var BaseJsonController = require('./controllers/BaseJsonController');
var rootController     = require('./controllers/rootController');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port
var router = express.Router();              // get an instance of the express Router

// Routes
router.get('/', new BaseJsonController(rootController.welcome).invoke);

// Server
app.use('/api/v1', router);
app.listen(port);

console.log('Server started on port ' + port);
