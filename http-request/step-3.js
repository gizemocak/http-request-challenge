var https = require('https');

function getAndPrintHTML(options) {
    let string = "";

    https.get(options, function (response) {
        response.setEncoding('utf8');

        response.on('data', function (data) {
            string += data
        })
        response.on('error', function (error) {
            console.log('error', error)
        })
        response.on('end', function () {
            console.log('string', string)
        })
    })

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)