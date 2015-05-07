// load aws sdk
var aws = require('aws-sdk');

aws.config.loadFromPath('aws-config.json');

var ses = new aws.SES({apiVersion: '2010-12-01'});


module.exports = {
    sendEmail: function(options){
        var to = options.to;
        var from = options.from;
        
        
        ses.sendEmail( { 
           source: from, 
           destination: { ToAddresses: to },
           message: {
               subject: { data: options.subject },
               body: {
                   text: {
                       data: options.body,
                   }
                }
           }
        }, function(err, data) {
            if(err) throw err
                console.log('Email sent:');
                console.log(data);
         });
    }
}

