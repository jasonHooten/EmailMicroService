'use strict';

var Details = require('../details');

module.exports = function ResendModel() {
    var details = new Details();
    return {
        details: details
    };
};