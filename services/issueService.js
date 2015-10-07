var _               = require('lodash');
var issues          = [];

var defaultIssue    = {
  title:       '',
  sprintId:    null,
  description: '',
  ownerId:     null,
  createdBy:   null,
  status:      'Open'
};

var issueService    = {
  find:    find,
  findAll: findAll,
  add:     add,
  update:  update
};

function find(id) {
  return issues.filter(function (issue) {
    return issue.id === id;
  })[0] || {};
}

function findAll() {
  return issues;
}

function add(issue) {
  issue.id = (issues.length ? issues[issues.length -1].id + 1 : 1);
  issue = _.extend(defaultIssue, issue);

  issues.push(issue);

  return issue;
}

function update(changes) {
  var issue = find(changes.id);

  return _.extend(issue, changes);
}

module.exports = issueService;
