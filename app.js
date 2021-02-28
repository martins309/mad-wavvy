const http = require('http'),
    hostname = '127.0.0.1',
    port = 3001;

const express = require('express'),
    session = require('express-session'),
    app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(session({
    secret: 'surfs up',
    resave: false,
    saveUninitialized: false,
    is_loggin_in: false,
}));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`)
});

const rootController = require('./routes/index');



const secured = (req, res, next) => {
    if (req.session.is_logged_in) {
    return next();
    }
    res.redirect("/");
    };
    
    
app.use('/', rootController);