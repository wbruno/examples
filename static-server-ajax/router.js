var seo = require('./seo').seo,
    html = require('./html').html,
    module = {};

function xhr(filename, res) {
    var content = html.getContent(__dirname + '/views/' + filename + '.html'),
        title = seo[filename].title,
        description = seo[filename].description,
        ret = { "content" : content, "title" : title, "description" : description }

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(ret));
    res.end();
}
function handleRequest(route, req, res) {
    if (req.xhr) {
        xhr(route, res);
    } else {
        res.render(route, seo[route]);
    }   
}

module.index = function(req, res) {
    handleRequest('index', req, res);
};
module.aboutUs = function(req, res) {
    handleRequest('about-us', req, res);
};
module.contact =function(req, res) {
    handleRequest('contact', req, res);
};
module.notFound =function(req, res) {
    res.status(404);
    handleRequest('404', req, res);
};

exports.router = module;