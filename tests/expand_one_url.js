var Bitly = require(__dirname + '/../bitly');

console.log('Running test: Expand Url');

var bitly = new Bitly('bitlynodejs', 'R_8a2a91d31932dc7fda5468033dfe3c15');

bitly.expand(['http://bit.ly/9lCnZ9'], function(err, result) {
  if (err) throw err;
  console.dir(result);
});
