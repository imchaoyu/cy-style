const path = require('path');
console.log('eslint',  require.resolve(path.join(__dirname, '../', 'dist/eslint')));

module.exports = {
  extends: [require.resolve(path.join(__dirname, '../', 'dist/eslint'))]
}