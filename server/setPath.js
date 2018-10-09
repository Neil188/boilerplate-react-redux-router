const path = require('path');

module.exports = (dir, ...args) => path.join(dir, '..', 'dist', ...args);
