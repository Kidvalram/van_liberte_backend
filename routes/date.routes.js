const { authJwt } = require("../middlewares");
const controller = require("../controllers/date.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/dates/setDate", 
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.setDate);

  app.post("/api/dates/deleteDate", 
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.deleteDate);

  app.post("/api/dates/getDates", controller.getDates);

};