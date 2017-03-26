var express = require('express'),
    app = express(),
    hbs = require('hbs'),
    router = require('./router').router;


hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.engine('html', hbs.__express);


app.use(express.favicon(__dirname + '/public/favicon.ico'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.compress());
app.use(express.static(__dirname + '/public', { maxAge: 86400000 }));
app.use(app.router);


app.get('/', router.index);
app.get('/about-us', router.aboutUs);
app.get('/contact', router.contact);


app.get('*', router.notFound);


app.listen(3003);