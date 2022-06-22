const config = require("../config/auth.config");
const db = require("../models");
const Price = db.price;

exports.updatePrice = (req, res) => {
    
    /* const price = new Price({
        week: req.body.week,
        weekend: req.body.weekend,
        holidays: req.body.holidays
    }); */

    /* price.save(err => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        res.send({ message: "User was registered successfully!" });
    }); */

    var user_id = '60d062630e899f41c547e1d6';

    var price = {}
    price.week = req.body.week;
    price.weekend = req.body.weekend;
    price.holidays = req.body.holidays;

    Price.updateOne({_id: '60d062630e899f41c547e1d6'}, 
        price,
        function (err, docs) {
            if (err){
                console.log(err)
            }
             else{
                console.log("Updated User : ", docs);
            } 
    });

};

exports.getPrice = (req, res) => {
    
    var user_id = '60d062630e899f41c547e1d6';

    Price.findById(user_id, 
        function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                res.send(docs);
            } 
    });

};