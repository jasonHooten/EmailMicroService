

module.exports = {
    sendEmail: function(options){
       if(options.to === undefined) throw Error("missing to in email");
	   console.log('***mock  email sent to ' + options.to + " with no errors.");
    }
}