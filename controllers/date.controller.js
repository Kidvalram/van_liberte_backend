const db = require("../models");
const dbDate = db.date;

exports.setDate = (req, res) => {
    
    const date = new dbDate({
        date: req.body.date,
    });

    dbDate.findOneAndUpdate({date: date.date}, date, function(error, result) {
        if (!error) {
            // If the document doesn't exist
            // Save the document
            date.save(function(error) {
                if (!error) {
                    res.send({ message: "Date was registered successfully!" });
                } else {
                    throw error;
                }
            });
        }
    });
    
};

exports.deleteDate = (req, res) => {

    const date = new dbDate({
        date: req.body.date,
    });

    dbDate.findOneAndDelete({ date: date.date }, function (err) {
        if(err) console.log(err);
    });

};

exports.getDates = (req, res) => {

    const listDate = []

    dbDate.find({}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
            var today = new Date();
            today.setHours(0,0,0,0);
            today =  today.toISOString();
            result.forEach(item => {
                if(Date.parse(item.date) < Date.parse(today)){
                    dbDate.findOneAndDelete({ date: item.date }, function (err) {
                        if(err) console.log(err);
                    });
                }else{
                    listDate.push(item.date);
                }
            })
            res.status(200).send(listDate);
        }
    });
    
};
