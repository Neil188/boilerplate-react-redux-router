const app = require('./app');
const handleListen = require('./handleListen');

const port = process.env.PORT || 3000;

/* eslint no-console: 0 */
app.listen(port, handleListen(console.log, port) );
