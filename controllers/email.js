'use strict';


var SendModel = require('../models/email/send');
var ResendModel = require('../models/email/resend');

module.exports = function (router) {


    router.get('/send', function (req, res) {
        
        //send email logic here
        
        var model = new SendModel();
        res.json(model);
    });


    router.get('/resend/:id', function (req, res) {
        if(req.params.id === undefined) {
            return res.status(500).json({ error: 'missing param: id'});
        }
        var id = req.params.id;
        
        //send email logic here
        
        var model = new ResendModel();
        model.requestUrl = '/email/resend/'+id;
        res.json(model);
    });

};
