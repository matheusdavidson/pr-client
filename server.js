//
// Ajustar configs
// 
var argv = require('minimist')(process.argv.slice(2));

if(argv.NODE_ENV) process.env.NODE_ENV = argv.NODE_ENV;
if(argv.MONGOLAB_URI) process.env.MONGOLAB_URI = argv.MONGOLAB_URI;
if(argv.PORT) process.env.PORT = argv.PORT;
if(argv.PRERENDER_TOKEN) process.env.PRERENDER_TOKEN = argv.PRERENDER_TOKEN;

var express = require('express');
var compression = require('compression');
var prerender = require('prerender-node');
var base64url = require('b64url');
var bodyParser = require('body-parser');
var app = express();
var sm = require('sitemap'),
    currentSitemap;

// Here we require the prerender middleware that will handle requests from Search Engine crawlers 
// We set the token only if we're using the Prerender.io service 
app.use(require('prerender-node').set('prerenderToken', process.env.PRERENDER_TOKEN).set('host', 'pr-client.jelasticlw.com.br'));
// app.use(app.router);

app.use(express.static(__dirname + '/dist'));
app.use(compression());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//
// handle sitemap get
// 
app.get('/sitemap.xml', function(req, res) {
    //
    // generates sitemap
    // 
    sitemap(function(err, currentSitemap) {
        if (err)
            handleError(res, 'sitemap error');
        res.header('Content-Type', 'application/xml');
        res.send(currentSitemap.toString());
    });
});

//
// handle all gets
// 
app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 3001);

function sitemap(cb) {
    var currentSitemap = sm.createSitemap({
        hostname: 'http://pr-client.jelasticlw.com.br',
        cacheTime: 600000, // 600 sec - cache purge period
        urls: [{
            url: '/',
            changefreq: 'daily',
            priority: 0.3
        }, {
            url: '/obrigado/',
            changefreq: 'daily',
            priority: 0.3
        }, {
            url: '/tabela-valores/',
            changefreq: 'daily',
            priority: 0.3
        }, {
            url: '/residence/',
            changefreq: 'daily',
            priority: 0.3
        }]
    });

    if (cb) return cb(err, currentSitemap);
}

function handleError(res, err) {
    return res.status(500).send(err);
}