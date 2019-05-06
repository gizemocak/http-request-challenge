module.exports = function getHTML(options, callback) {
    var https = require('https');
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
};