'use strict';

var Details = require('../details');

module.exports = function IndexModel() {
    var details = new Details();
    return {
        resend: '/email/resend/'+details.id,
        details: details
    };
};
