var _               = require('lodash');
var issueService    = require('../services/issueService');

var issueController = {
  getCollection: getCollection,
  get:           get,
  post:          post,
  patch:         patch
};

function getCollection() {
  return issueService.findAll();
}

function get(req) {
  return issueService.find(+req.params.issueId);
}

function post(req) {
  return issueService.add(req.body);
}

function patch(req) {
  return issueService.update(_.extend(req.body, {id: +req.params.issueId}));
}

module.exports = issueController;
