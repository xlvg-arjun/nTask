'use strict';
const routers = require('../routers');
module.exports = function(app){
  app.set('port', 3000);
  app.set("json spaces", 4);
  app.use(routers);
  return app;
};