"use strict";

require("core-js/modules/es6.object.assign");

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
    this.option = option ? Object.assign(defaultOption, option) : defaultOption;
    this.el = doc.querySelector(this.option.el);
    this.el.style.position = 'fixed';
    this.el.style.left = '0px';
    this.el.style.top = '0px';
    this.el.style.animation = 'float-row-animation linear ' + doc.documentElement.clientWidth / this.option.speed + 's infinite,float-col-animation linear ' + doc.documentElement.clientHeight / this.option.speed + 's infinite';
  };

  FloatModel.prototype.start = function () {
    var rowkeyframes = " @keyframes float-row-animation{\n            0%{\n                left: 0px;\n            }\n            50%{\n                left:".concat(doc.documentElement.clientWidth - this.el.offsetWidth, "px;\n            }\n            100%{\n                left: 0px;\n            }\n        }\n        @keyframes float-col-animation{\n            0%{\n                top: 0px;\n            }\n            50%{\n                top:").concat(doc.documentElement.clientHeight - this.el.offsetHeight, "px;\n            }\n            100%{\n                top: 0px;\n            }\n        }\n        ").concat(this.option.el, ":hover{\n            animation-play-state:paused !important;\n        }\n        ");
    var style = doc.createElement('style');
    style.type = "text/css";
    style.innerHTML = rowkeyframes;
    doc.getElementsByTagName('head')[0].appendChild(style);
  };

  FloatModel.prototype.close = function () {
    this.el.style.display = 'none';
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = FloatModel;
  if (typeof define === 'function') define(function () {
    return FloatModel;
  });
  win.FloatModel = FloatModel;
})(window, document);