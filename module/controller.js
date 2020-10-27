const config = require('./config');

exports.uploads = (req, res) => {
    console.log('uploads');
    const url = req.protocol + '://' + req.headers.host + '/' + config.folderName + '/';
    req.file.url = url + req.file.filename;

    res.jsonp({
        data: req.file
    });
}