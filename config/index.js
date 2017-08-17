var configValues = require('./config');

module.exports = {
  getDbConnectionString: function() {
    return  'mongodb://' + configValues.uname + ':' + configValues.pwd + 
    '@ds129183.mlab.com:29183/testing';
  }
};