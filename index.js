'use strict';

var repeat = require('repeat-string');


/**
 * Align string with spaces.
 *
 * @arg {*} string - Data to be aligned. Converted to a string.
 * @arg {number} width
 * @arg {"center","left","right"} [alignment="center"]
 */
module.exports = function (string, width, alignment) {
  string = string.toString();

  if (width <= string.length) {
    return string;
  }

  if (!alignment || alignment == 'center') {
    var left = Math.floor((width - string.length) / 2)
      , right = width - string.length - left;

    return repeat(' ', left) + string + repeat(' ', right);
  }
  else {
    var whitespace = repeat(' ', width);

    if (alignment == 'left') {
      return (string + whitespace).slice(0, width);
    }
    else if (alignment == 'right') {
      return (whitespace + string).slice(-width);
    }
  }

  throw new Error('Invalid alignment type: ' + alignment);
};
