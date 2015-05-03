// load aws sdk
var aws = require('aws-sdk');

aws.config.loadFromPath('aws-config.json');

var ses = new aws.SES({apiVersion: '2010-12-01'});

var to = ['jason.hooten@gmail.com']
var from = 'jason.hooten@gmail.com';


ses.sendEmail( { 
   source: from, 
   destination: { ToAddresses: to },
   message: {
       subject: { data: 'A Message To You Jason' },
       body: {
           text: {
               data: 'Stop your messing around',
           }
        }
   }
}, function(err, data) {
    if(err) throw err
        console.log('Email sent:');
        console.log(data);
 });