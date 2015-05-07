'use strict';

var emailService = require('../lib/semdEmail.js')
var SendModel = require('../models/email/send');
var ResendModel = require('../models/email/resend');

module.exports = function (router) {


    router.get('/send', function (req, res) {
        
        //set timer
        //authentic user
                
        //send email logic here
        emailService.sendEmail(req.query.to, req.query.from, req.query.subject, req.query.body);
        
        //log
        //audit
        //save to db
        
        var model = new SendModel();
        res.json(model);
    });


    router.get('/resend/:id', function (req, res) {
        if(req.params.id === undefined) return res.status(500).json({ error: 'missing param: id'});
        var id = req.params.id;
        
        //send email logic here
        
        var model = new ResendModel();
        model.requestUrl = '/email/resend/'+id;
        res.json(model);
    });

};
