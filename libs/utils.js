var utils = {};

utils.captureMouse = function(element) {
  var mouse = {
    x: 0,
    y: 0
  };

  element.addEventListener('mousemove', function(e) {
    var x, y;

    if (e.pageX || e.pageY) {
      x = e.pageX;
      y = e.pageY;
    } else {
      x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    };

    x -= element.offsetLeft;
    y -= element.offsetTop;

    mouse.x = x;
    mouse.y = y;
  });

  return mouse;
}

utils.captureTouch = function(element) {
  var touch = {
    x: null,
    y: null,
    isPressed: false
  };

  element.addEventListener('touchstart', function(e) {
    touch.isPressed = true;
  });

  element.addEventListener('touchend', function(e) {
    touch.isPressed = false;
    touch.x = null;
    touch.y = null;
  })

  element.addEventListener('touchmove', function(e) {
    var x, y;
    var touch_event = e.touches[0]; // first touch

    if (touch_event.pageX || touch_event.pageY) {
      x = touch_event.pageX;
      y = touch_event.pageY;
    } else {
      x = touch_event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = touch_event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    x -= element.offsetLeft;
    y -= element.offsetTop;

    touch.x = x;
    touch.y = y;
  })

  return touch;
}

/**
 * Converts a color to the RGB string format: 'rgb(r,g,b)' or 'rgba(r,g,b,a)'
 * @param {number|string} color
 * @param {number}        alpha
 * @return {string}
 */
utils.colorToRGB = function (color, alpha) {
  //number in octal format or string prefixed with #
  if (typeof color === 'string' && color[0] === '#') {
    color = window.parseInt(color.slice(1), 16);
  }
  alpha = (alpha === undefined) ? 1 : alpha;
  //parse hex values
  var r = color >> 16 & 0xff,
      g = color >> 8 & 0xff,
      b = color & 0xff,
      a = (alpha < 0) ? 0 : ((alpha > 1) ? 1 : alpha);
  //only use 'rgba' if needed
  if (a === 1) {
    return "rgb("+ r +","+ g +","+ b +")";
  } else {
    return "rgba("+ r +","+ g +","+ b +","+ a +")";
  }
};

/**
 * Returns a color in the format: '#RRGGBB', or as a hex number if specified.
 * @param {number|string} color
 * @param {boolean=}      toNumber=false  Return color as a hex number.
 * @return {string|number}
 */
utils.parseColor = function (color, toNumber) {
  if (toNumber === true) {
    if (typeof color === 'number') {
      return (color | 0); //chop off decimal
    }
    if (typeof color === 'string' && color[0] === '#') {
      color = color.slice(1);
    }
    return window.parseInt(color, 16);
  } else {
    if (typeof color === 'number') {
      color = '#' + ('00000' + (color | 0).toString(16)).substr(-6); //pad
    }
    return color;
  }
};

utils.containsPoint = function(rect, x, y) {
  return !(x < rect.x || x > rect.x + rect.width ||
           y < rect.y || y > rect.y + rect.height);
};

/**
 * Some random number functions.
 */

utils.getRandomArbitrary = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

utils.getRandomArbitraryDecimal = function(min, max) {
  return (Math.random() * (max - min)) + min;
}

utils.coinFlip = function() {
  return Math.floor(Math.random() * 2);
}

utils.manyCoinFlips = function(flips) {
  for (let i = 0; i < flips; i++) {
    const flip = Math.floor(Math.random() * 2);

    if (!flip) {
      return 0;
    }
  }

  return 1;
}

/**
 * Build and return a random color string. Takes specific values or ranges as
 * arrays for random values. 
 * 
 * Note: this sure looks complex!
 */

utils.getRandomColor = function(cfg) {
  var randomColorValues = [];

  for (var color in cfg) {
    if (cfg.hasOwnProperty(color)) {
      if (Array.isArray(cfg[color])) {
        if (color === 'o') {
          var colVal = utils.getRandomArbitraryDecimal(cfg[color][0], cfg[color][1]);
        } else {
          var colVal = utils.getRandomArbitrary(cfg[color][0], cfg[color][1]);
        }

        randomColorValues.push(colVal);
      } else {
        randomColorValues.push(cfg[color]);
      }
    } 
  }

  // default opacity to 1 if not specified
  if (randomColorValues.length === 3) {
    randomColorValues.push(1);
  }

  return 'rgba(' + randomColorValues.join(',') + ')';
}
