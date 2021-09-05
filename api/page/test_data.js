const fs = require('fs');
const dummyjson = require('dummy-json');

function data() {
  const template = fs.readFileSync('api/data/schema/testdata.hbs', {
    encoding: 'utf8',
  });
  const result = dummyjson.parse(template);
  return result;
}

module.exports = data();
