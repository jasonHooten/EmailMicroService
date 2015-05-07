
//var emailProvider = require('./providers/aws.js');
var emailProvider = require('./providers/mock');


module.exports = {
	sendEmail: function(to, from, subject, body){
		
		var options = {
			to: to,
			from: from,
			subject: subject,
			body: body
		};
		
		emailProvider.sendEmail(options);
	}
}

