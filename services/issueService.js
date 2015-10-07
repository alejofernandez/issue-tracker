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
  getEmptyIssue: getEmptyIssue,
  find:          find,
  findAll:       findAll,
  add:           add,
  update:        update,
  remove:        remove
};

function getEmptyIssue() {
  return _.extend({}, defaultIssue);
}

function find(id) {
  return _.find(issues, {id: id}) || {};
}

function findAll() {
  return issues;
}

function add(issue) {
  issue.id = (issues.length ? issues[issues.length -1].id + 1 : 1);
  issue = _.extend(getEmptyIssue(), issue);

  issues.push(issue);

  return issue;
}

function update(changes) {
  var issue = find(changes.id);

  return _.extend(issue, changes);
}

function remove(id) {
  _.remove(issues, {id: id});
}

module.exports = issueService;
