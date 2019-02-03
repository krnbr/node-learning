const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    // GET URL and parse it
    let parsedUrl = url.parse(req.url, true);

    // GET PATH
    let path = parsedUrl.pathname;
    let trimmedPath = path.replace(/\+|\/+$/g, '');

    // GET the QUERY STRING as an Object
    let queryStringObject = JSON.parse(JSON.stringify(parsedUrl.query));

    // GET THE HTTP METHOD
    let method = req.method;

    // GET THE HTTP HEADERS
    let headers = req.headers;

    // SEND the RESPONSE
    res.end("Hello World\n");

    // Log the request
    console.log('Request is received on path: '+trimmedPath+' with method: '+method+' with the query strings ',queryStringObject);
    console.log('Request received with headers ',headers);

});

server.listen(6982,
    () => console.log("The server is listening to port 6982 now")
);
