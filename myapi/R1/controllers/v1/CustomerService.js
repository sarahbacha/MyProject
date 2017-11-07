'use strict';
  var CustomerFD = require('../../sampleData/v1/Customer.json');
  var CustomerData = CustomerFD;


var Promise = require('bluebird');
var paginationService = require('../../services/pagination.js');
 

exports.getCustomer = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(CustomerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, CustomerData).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        res.end(JSON.stringify(result.pagedData));
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}




exports.postCustomer = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(CustomerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(CustomerData[Object.keys(CustomerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}

