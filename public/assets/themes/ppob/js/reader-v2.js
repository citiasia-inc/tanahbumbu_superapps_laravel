'use strict';
var original = document.querySelectorAll('img')[0];
var rotated = document.querySelectorAll('img')[1];
var span = document.querySelector('span');
document.querySelector('input').addEventListener('change', function(event){
  log('File changed', true);
  var file = event.target.files[0];
  if(file === undefined){
    original.parentElement.style.display = 'none';
    rotated.parentElement.style.display = 'none';
    log('No file selected');
    return;
  }
  getOrientation(file, showImage);
});
// Based on: https://stackoverflow.com/a/32490603/5503625
function getOrientation(file, callback) {
  log('getOrientation()');
  if(!window.FileReader){
    return log('FileReader is not supported');
  }
  if(!window.FileReader.prototype.readAsArrayBuffer){
    return log('readAsArrayBuffer is not supported');
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    if(!window.DataView){
      return log('DataView is not supported');
    }
    if(!window.DataView.prototype.getUint16){
      return log('getUint16 is not supported');
    }
    if(!window.DataView.prototype.getUint32){
      return log('getUint32 is not supported');
    }
    var view = new DataView(e.target.result);
    if (view.getUint16(0, false) != 0xFFD8) return callback(file, -2);
    var length = view.byteLength, offset = 2;
    while (offset < length) {
      var marker = view.getUint16(offset, false);
      offset += 2;
      if (marker == 0xFFE1) {
        if (view.getUint32(offset += 2, false) != 0x45786966) return callback(file, -1);
        var little = view.getUint16(offset += 6, false) == 0x4949;
        offset += view.getUint32(offset + 4, little);
        var tags = view.getUint16(offset, little);
        offset += 2;
        for (var i = 0; i < tags; i++)
          if (view.getUint16(offset + (i * 12), little) == 0x0112)
            return callback(file, view.getUint16(offset + (i * 12) + 8, little));
      }
      else if ((marker & 0xFF00) != 0xFF00) break;
      else offset += view.getUint16(offset, false);
    }
    return callback(file, -1);
  };
  reader.readAsArrayBuffer(file);
}
function log(data, clear){
  if(clear){
    span.innerHTML = '';
  }
  span.innerHTML += '<br>' + data;
}
function showImage(file, exifOrientation) {
  log('showImage()');
  log('EXIF orientation ' + exifOrientation);
  if(!window.FileReader){
    return log('FileReader is not supported');
  }
  if(!window.FileReader.prototype.readAsDataURL){
    return log('readAsDataURL is not supported');
  }
  var reader = new FileReader();
  reader.onload = function(event){
    original.src = event.target.result;
    rotated.src = event.target.result;
    original.parentElement.style.display = 'block';
    rotated.parentElement.style.display = 'block';
    var degrees = 0;
    var portraitCheck = false;
    switch(exifOrientation){
      case 1:
        // Normal
        break;
      case 2:
        // Horizontal flip
        break;
      case 3:
        // Rotated 180Â°
        degrees = 180;
        break;
      case 4:
        // Vertical flip
        break;
      case 5:
        // Rotated 90Â° -> Horizontal flip
        break;
      case 6:
        // Rotated 270Â°
        degrees = 90;
        portraitCheck = true;
        break;
      case 7:
        // Rotated 90Â° -> Vertical flip
        break;
      case 8:
        // Rotated 90Â°
        degrees = 270;
        portraitCheck = true;
        break;
    }
    var img = document.createElement('img');
    img.style.visibility = 'none';
    document.body.appendChild(img);
    img.onload = function(){
      if(portraitCheck && this.height > this.width){
        log('Image already rotated');
        degrees = 0;
      }
      var transform = 'rotate(' + degrees + 'deg)';
      log('transform:' + transform);
      rotated.style.transform = transform;
      rotated.style.webkitTransform = transform;
      rotated.style.msTransform = transform;
      document.body.removeChild(this);
    }
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}
