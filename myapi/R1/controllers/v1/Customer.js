'use strict';
var url = require('url');
var Customer = require('./CustomerService');

module.exports.getCustomer = function getCustomer (req, res, next) {
    Customer.getCustomer (req.swagger.params, res, next);
};

module.exports.postCustomer = function postCustomer (req, res, next) {
    Customer.postCustomer (req.swagger.params, res, next);
};

