const app = require("./app");

function App(req, res) {
  if (!req.url) {
    req.url = "/";
    req.path = "/";
  }
  return app(req, res);
}

const note = App;
module.exports = { note };
