const { authJwt } = require("../middlewares");
const controller = require("../controllers/price.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/price/getPrice", controller.getPrice);

  app.post("/api/price/updatePrice", 
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.updatePrice);

};