var https = require('https');

function getHTML(options, callback) {
    let string = '';

    https.get(options, function (response) {
        response.setEncoding('utf8');

        response.on('data', function (data) {
            string += data
        })
        response.on('error', function (error) {
            console.log('error', error)
        })
        response.on('end', function () {
            callback(string)
        })
    })
}

function printHTML(html) {
    console.log(html);
    return true;
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)