"use strict";

;

(function (win, doc) {
  "use strict";

  var defaultOption = {
    el: '#float-model',
    offset: {
      x: 0,
      y: 0
    },
    speed: 100
  };

  var FloatModel = function FloatModel(option) {
    this.option = option ? defaultOption.concat(option) : defaultOption;
    this.el = typeof this.option.el === "string" ? doc.querySelector(this.option.el) : this.option.el;
    this.el.style.position = 'fixed';
    this.el.style.left = '0px';
    this.el.style.top = '0px';
    this.el.style.animation = 'float-row-animation linear ' + win.innerWidth / this.option.speed + 's infinite,float-col-animation linear ' + win.innerHeight / this.option.speed + 's infinite';
  };

  FloatModel.prototype.start = function () {
    var rowkeyframes = " @keyframes float-row-animation{\n            0%{\n                left: 0px;\n            }\n            50%{\n                left:".concat(win.innerWidth - this.el.offsetWidth, "px;\n            }\n            100%{\n                left: 0px;\n            }\n        }");
    var colkeyframes = " @keyframes float-col-animation{\n            0%{\n                top: 0px;\n            }\n            50%{\n                top:".concat(win.innerHeight - this.el.offsetHeight, "px;\n            }\n            100%{\n                top: 0px;\n            }\n        }");
    var style = doc.createElement('style');
    style.type = "text/css";
    style.innerHTML = rowkeyframes + colkeyframes;
    doc.getElementsByTagName('head')[0].appendChild(style);
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = FloatModel;
  if (typeof define === 'function') define(function () {
    return FloatModel;
  });
  win.FloatModel = FloatModel;
})(window, document);