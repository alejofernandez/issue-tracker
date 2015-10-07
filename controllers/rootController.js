var rootController = {};

rootController.welcome = function (req) {
  return {'message': 'Welcome to Issue Tracker'};
};

module.exports = rootController;
