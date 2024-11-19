/*
 * JavaScript Load Image Demo JS
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global loadImage, HTMLCanvasElement, $ */

$(function () {
  'use strict'

  var result  = $('#output_profile')
  var result2 = $('#output_ktp')
  var result3 = $('#output_ktp_selfie')

  var exifNode = $('#exif')
  var thumbNode = $('#thumbnail')
  var actionsNode = $('#actions')
  var currentFile
  var coordinates

  function displayExifData (exif) {
    var thumbnail = exif.get('Thumbnail')
    var tags = exif.getAll()
    var table = exifNode.find('table').empty()
    var row = $('<tr></tr>')
    var cell = $('<td></td>')
    var prop
    if (thumbnail) {
      thumbNode.empty()
      loadImage(thumbnail, function (img) {
        thumbNode.append(img).show()
      }, {orientation: exif.get('Orientation')})
    }
    for (prop in tags) {
      if (tags.hasOwnProperty(prop)) {
        table.append(
          row.clone()
            .append(cell.clone().text(prop))
            .append(cell.clone().text(tags[prop]))
        )
      }
    }
    exifNode.show()
  }


  function displayExifData2 (exif) {
    var thumbnail = exif.get('Thumbnail')
    var tags = exif.getAll()
    var table = exifNode.find('table').empty()
    var row = $('<tr></tr>')
    var cell = $('<td></td>')
    var prop
    if (thumbnail) {
      thumbNode.empty()
      loadImage(thumbnail, function (img) {
        thumbNode.append(img).show()
      }, {orientation: exif.get('Orientation')})
    }
    for (prop in tags) {
      if (tags.hasOwnProperty(prop)) {
        table.append(
          row.clone()
            .append(cell.clone().text(prop))
            .append(cell.clone().text(tags[prop]))
        )
      }
    }
    exifNode.show()
  }


function displayExifData3 (exif) {
    var thumbnail = exif.get('Thumbnail')
    var tags = exif.getAll()
    var table = exifNode.find('table').empty()
    var row = $('<tr></tr>')
    var cell = $('<td></td>')
    var prop
    if (thumbnail) {
      thumbNode.empty()
      loadImage(thumbnail, function (img) {
        thumbNode.append(img).show()
      }, {orientation: exif.get('Orientation')})
    }
    for (prop in tags) {
      if (tags.hasOwnProperty(prop)) {
        table.append(
          row.clone()
            .append(cell.clone().text(prop))
            .append(cell.clone().text(tags[prop]))
        )
      }
    }
    exifNode.show()
  }

  function updateResults (img, data) {
    var fileName = currentFile.name
    var href = img.src
    var dataURLStart
    var content
    if (!(img.src || img instanceof HTMLCanvasElement)) {
      content = $('<span>Loading image file failed</span>')
    } else {
      if (!href) {
        href = img.toDataURL(currentFile.type + 'REMOVEME')
        // Check if file type is supported for the dataURL export:
        dataURLStart = 'data:' + currentFile.type
        if (href.slice(0, dataURLStart.length) !== dataURLStart) {
          fileName = fileName.replace(/\.\w+$/, '.png')
        }
      }
      content = $('<a target="_blank">').append(img)
        .attr('download', fileName)
    }
    result.children().replaceWith(content)
    if (img.getContext) {
      actionsNode.show()
    }
    if (data && data.exif) {
      displayExifData(data.exif)
    }
  }

  function updateResults2 (img, data) {
    var fileName = currentFile.name
    var href = img.src
    var dataURLStart
    var content
    if (!(img.src || img instanceof HTMLCanvasElement)) {
      content = $('<span>Loading image file failed</span>')
    } else {
      if (!href) {
        href = img.toDataURL(currentFile.type + 'REMOVEME')
        // Check if file type is supported for the dataURL export:
        dataURLStart = 'data:' + currentFile.type
        if (href.slice(0, dataURLStart.length) !== dataURLStart) {
          fileName = fileName.replace(/\.\w+$/, '.png')
        }
      }
      content = $('<a target="_blank">').append(img)
        .attr('download', fileName)
    }
    result2.children().replaceWith(content)
    if (img.getContext) {
      actionsNode.show()
    }
    if (data && data.exif) {
      displayExifData2(data.exif)
    }
  }

  function updateResults3 (img, data) {
    var fileName = currentFile.name
    var href = img.src
    var dataURLStart
    var content
    if (!(img.src || img instanceof HTMLCanvasElement)) {
      content = $('<span>Loading image file failed</span>')
    } else {
      if (!href) {
        href = img.toDataURL(currentFile.type + 'REMOVEME')
        // Check if file type is supported for the dataURL export:
        dataURLStart = 'data:' + currentFile.type
        if (href.slice(0, dataURLStart.length) !== dataURLStart) {
          fileName = fileName.replace(/\.\w+$/, '.png')
        }
      }
      content = $('<a target="_blank">').append(img)
        .attr('download', fileName)
    }
    result3.children().replaceWith(content)
    if (img.getContext) {
      actionsNode.show()
    }
    if (data && data.exif) {
      displayExifData3(data.exif)
    }
  }

  function displayImage (file, options) {
    currentFile = file
    if (!loadImage(
      file,
      updateResults,
      options
    )) {
      result.children().replaceWith(
        $('<span>' +
          'Your browser does not support the URL or FileReader API.' +
          '</span>')
      )
    }
  }

  function displayImage2 (file, options) {
    currentFile = file
    if (!loadImage(
      file,
      updateResults2,
      options
    )) {
      result2.children().replaceWith(
        $('<span>' +
          'Your browser does not support the URL or FileReader API.' +
          '</span>')
      )
    }
  }

  function displayImage3 (file, options) {
    currentFile = file
    if (!loadImage(
      file,
      updateResults3,
      options
    )) {
      result3.children().replaceWith(
        $('<span>' +
          'Your browser does not support the URL or FileReader API.' +
          '</span>')
      )
    }
  }

  function dropChangeHandler (e) {
    e.preventDefault()
    e = e.originalEvent
    var target = e.dataTransfer || e.target
    var file = target && target.files && target.files[0]
    var options = {
      maxWidth: result.width(),
      canvas: true,
      pixelRatio: window.devicePixelRatio,
      downsamplingRatio: 0.5,
      orientation: true
    }
    if (!file) {
      return
    }
    exifNode.hide()
    thumbNode.hide()
    displayImage(file, options)
  }

  function dropChangeHandler2 (e) {
    e.preventDefault()
    e = e.originalEvent
    var target = e.dataTransfer || e.target
    var file = target && target.files && target.files[0]
    var options = {
      maxWidth: result2.width(),
      canvas: true,
      pixelRatio: window.devicePixelRatio,
      downsamplingRatio: 0.5,
      orientation: true
    }
    if (!file) {
      return
    }
    exifNode.hide()
    thumbNode.hide()
    displayImage2(file, options)
  }

 function dropChangeHandler3 (e) {
    e.preventDefault()
    e = e.originalEvent
    var target = e.dataTransfer || e.target
    var file = target && target.files && target.files[0]
    var options = {
      maxWidth: result3.width(),
      canvas: true,
      pixelRatio: window.devicePixelRatio,
      downsamplingRatio: 0.5,
      orientation: true
    }
    if (!file) {
      return
    }
    exifNode.hide()
    thumbNode.hide()
    displayImage3(file, options)
  }

  // Hide URL/FileReader API requirement message in capable browsers:
  if (window.createObjectURL || window.URL || window.webkitURL ||
      window.FileReader) {
    result.children().hide()
  }

  $(document)
    .on('dragover', function (e) {
      e.preventDefault()
      e = e.originalEvent
      e.dataTransfer.dropEffect = 'copy'
    })
    .on('drop', dropChangeHandler)

  $('#uploads_profile')
    .on('change', dropChangeHandler)

  $('#uploads_ktp')
    .on('change', dropChangeHandler2)

  $('#uploads_ktp_selfie')
    .on('change', dropChangeHandler3)

  $('#edit')
    .on('click', function (event) {
      event.preventDefault()
      var imgNode = result.find('img, canvas')
      var img = imgNode[0]
      var pixelRatio = window.devicePixelRatio || 1
      imgNode.Jcrop({
        setSelect: [
          40,
          40,
          (img.width / pixelRatio) - 40,
          (img.height / pixelRatio) - 40
        ],
        onSelect: function (coords) {
          coordinates = coords
        },
        onRelease: function () {
          coordinates = null
        }
      }).parent().on('click', function (event) {
        event.preventDefault()
      })
    })

  $('#crop')
    .on('click', function (event) {
      event.preventDefault()
      var img = result.find('img, canvas')[0]
      var pixelRatio = window.devicePixelRatio || 1
      if (img && coordinates) {
        updateResults(loadImage.scale(img, {
          left: coordinates.x * pixelRatio,
          top: coordinates.y * pixelRatio,
          sourceWidth: coordinates.w * pixelRatio,
          sourceHeight: coordinates.h * pixelRatio,
          minWidth: result.width(),
          maxWidth: result.width(),
          pixelRatio: pixelRatio,
          downsamplingRatio: 0.5
        }))
        coordinates = null
      }
    })
})
