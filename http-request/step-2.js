var https = require('https');

function getAndPrintHTML() {
    let string = "";

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };

    https.get(requestOptions, function (response) {
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

getAndPrintHTML()