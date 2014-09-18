module.exports = function (imageBuffer, callback) {
  var Canvas = require('canvas');
  var Image = Canvas.Image;
  var fs = require('fs');

  var overlay = fs.readFileSync('put-a-bird-on-it2.png');

  var img = new Image;
  img.src = imageBuffer;

  var ratio = img.width / img.height;

  var width = 420;
  var height = width / ratio;

  var canvas = new Canvas(width,height);
  var ctx = canvas.getContext('2d');

  var overlay_image = new Image;
  overlay_image.src = overlay;

  console.log(overlay_image)
  ctx.drawImage(img, 0, 0, width, height);
  ctx.drawImage(overlay_image,0,0, 300,300);
  ctx.rect(20,20,150,100);
  ctx.stroke();
  callback(canvas.toDataURL());





};
