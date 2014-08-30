module.exports = function (imageBuffer, callback) {
  var fs = require('fs'),
      gm = require('gm');

  var modBuffer = ""
  gm(imageBuffer)
  .flip()
  .toBuffer(function(err, buffer) {
    if (err) return handle(err);
    callback(buffer);
  });
};
