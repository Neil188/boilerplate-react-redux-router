const setPath = require('./setPath');

const file = setPath(__dirname, 'index.html');

module.exports = (_, res) =>
    res.sendFile(file);
