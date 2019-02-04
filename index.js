const http = require('http');
const url = require('url');
const stringDecoder = require('string_decoder').StringDecoder;

const server = http.createServer((req, res) => {

    // GET URL and parse it
    let parsedUrl = url.parse(req.url, true);

    // GET PATH
    let path = parsedUrl.pathname;
    let trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // GET the QUERY STRING as an Object
    let queryStringObject = JSON.parse(JSON.stringify(parsedUrl.query));

    // GET THE HTTP METHOD
    let method = req.method;

    // GET THE HTTP HEADERS
    let headers = req.headers;

    // GET the payload if there is any
    let decoder = new stringDecoder('UTF-8');
    let buffer = '';

    req.on('data', data => {
        buffer = decoder.write(data);
    });
    req.on('end', () => {
        buffer += decoder.end();
        /*// SEND the RESPONSE
        res.end("Hello World\n");*/

        console.log('Request is received on path: '+trimmedPath+' with method: '+method+' with the query strings ',queryStringObject);
        // choose the handler where it should go
        // if found then go sample handler else not found
        let matchedHandler = typeof(router[trimmedPath]) !== 'undefined' ? router['sample'] : handlers.notFound;

        let data = {
            trimmedPath,
            queryStringObject,
            method,
            headers,
            payload:buffer
        };

        matchedHandler(data, (statusCode, payload) => {
            // LOG the request
            console.log('Request is received on path: '+trimmedPath+' with method: '+method+' with the query strings ',queryStringObject);
            console.log('Request received with headers ',headers);
            console.log('Request received with payload ',buffer);

            statusCode = typeof(statusCode) == 'number' ? statusCode : 200;
            payload = typeof(payload) == 'object' ? payload : {};
            let payloadString = JSON.stringify(payload);
            res.writeHead(statusCode);
            res.end(payloadString);
        });

    });

});


server.listen(6982,
    () => console.log("The server is listening to port 6982 now")
);

// define handlers
let handlers = {};

handlers.sample = (data, callback) => {
    // Callback a http status code, and a payload object
    callback(406, {'name':'sample handler'});
};

handlers.notFound = (data, callback) => {
    callback(404);
};

// define a request router
let router = {
    'sample':handlers.sample
};
