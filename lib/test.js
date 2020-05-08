;

(function (win, doc) {
  "use strict";

  const defaultOption = {
    el: '#float-model',
    offset: {
      x: 0,
      y: 0
    },
    speed: 100
  };

  var FloatModel = function (option) {
    this.option = option ? defaultOption.concat(option) : defaultOption;
    this.el = doc.querySelector(this.option.el);
    this.el.style.position = 'fixed';
    this.el.style.left = '0px';
    this.el.style.top = '0px';
    this.el.style.animation = 'float-row-animation linear ' + doc.documentElement.clientWidth / this.option.speed + 's infinite,float-col-animation linear ' + doc.documentElement.clientHeight / this.option.speed + 's infinite';
  };

  FloatModel.prototype.start = function () {
    const rowkeyframes = ` @keyframes float-row-animation{
            0%{
                left: 0px;
            }
            50%{
                left:${doc.documentElement.clientWidth - this.el.offsetWidth}px;
            }
            100%{
                left: 0px;
            }
        }
        @keyframes float-col-animation{
            0%{
                top: 0px;
            }
            50%{
                top:${doc.documentElement.clientHeight - this.el.offsetHeight}px;
            }
            100%{
                top: 0px;
            }
        }
        ${this.option.el}:hover{
            animation-play-state:paused !important;
        }
        `;
    const style = doc.createElement('style');
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