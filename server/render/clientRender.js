const html = require('./html');
function clientRender() {
  return (req, res) =>
    res.send(
      html({
        title: 'testing'
      })
    );
}
module.exports = clientRender;
