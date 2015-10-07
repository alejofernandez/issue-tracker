function BaseJsonController(controllerAction) {
  this.invoke = function invoke(req, res) {
    res.json(controllerAction(req));
  };
}

module.exports = BaseJsonController;
