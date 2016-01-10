var Promise = require("bluebird"),
    fs = Promise.promisifyAll(require('fs-extra'));
var root = __dirname.replace(/autogo\/lib/,'autogo/')
function generateStructure(project){
  return fs.copyAsync(root+'/app', project,{clobber: true})
    .then(function(err){
      if (err) return console.error(err)
    })
}

module.exports = generateStructure;