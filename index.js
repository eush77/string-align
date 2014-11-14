'use strict';

var repeat = require('repeat-string');


var boundedAlignment = function (helper) {
  return function (string, options) {
    if (options.width <= string.length) {
      return string;
    }

    var whitespace = repeat(options.placeholder, options.width);
    return helper(string, options, whitespace);
  };
};


var align = {
  center: boundedAlignment(function (string, options) {
    var left = Math.floor((options.width - string.length) / 2)
      , right = options.width - string.length - left;

    return repeat(options.placeholder, left) + string + repeat(options.placeholder, right);
  }),
  left: boundedAlignment(function (string, options, whitespace) {
    return (string + whitespace).slice(0, options.width);
  }),
  right: boundedAlignment(function (string, options, whitespace) {
    return (whitespace + string).slice(-options.width);
  }),
  fill: function (string, options) {
    return repeat(string, Math.ceil(options.width / string.length)).slice(0, options.width);
  }
};


/**
 * Align string with whitespace.
 *
 * @arg {*} string - Data to be aligned. Converted to a string.
 * @arg {number} width
 * @arg {"center","left","right","fill"} [alignment="center"]
 * @arg {string} [placeholder=" "]
 */
module.exports = function (string, width, alignment, placeholder) {
  if (typeof width == 'object') {
    var options = width;
  }
  else {
    if (typeof alignment == 'string' && alignment.length == 1) {
      placeholder = alignment;
      alignment = null;
    }

    var options = {
      width: width,
      alignment: alignment,
      placeholder: placeholder
    };
  }

  options.alignment = options.alignment || 'center';
  options.placeholder = String(options.placeholder == null ? ' ' : options.placeholder);

  if (options.placeholder.length != 1) {
    throw new Error('Placeholder must be of length 1');
  }

  if (align[options.alignment]) {
    return align[options.alignment](string.toString(), options);
  }
  else {
    throw new Error('Invalid alignment type: ' + options.alignment);
  }
};
