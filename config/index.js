var configValues = require('./config');
// in future - add decrypter here too.

module.exports = {

  getDBConnectionString: function() {

    return 'mongodb://' + configValues.uname + ":" + configValues.pwd + "@ds147079.mlab.com:47079/nodetododemo"

  }

}
