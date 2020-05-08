; (function (win, doc) {
    "use strict";
    const defaultOption = {
        el: '#float-model',
        offset: { x: 0, y: 0 },
        speed: 100
    }
    var FloatModel = function (option) {
        this.option = option ? defaultOption.concat(option) : defaultOption
        this.el = typeof this.option.el === "string" ? doc.querySelector(this.option.el) : this.option.el
        this.el.style.position = 'fixed'
        this.el.style.left = '0px'
        this.el.style.top = '0px'
        this.el.style.animation = 'float-row-animation linear ' + win.innerWidth / this.option.speed + 's infinite,float-col-animation linear ' + win.innerHeight / this.option.speed + 's infinite'
    }

    FloatModel.prototype.start = function () {
        const rowkeyframes = ` @keyframes float-row-animation{
            0%{
                left: 0px;
            }
            50%{
                left:${win.innerWidth - this.el.offsetWidth}px;
            }
            100%{
                left: 0px;
            }
        }`
        const colkeyframes = ` @keyframes float-col-animation{
            0%{
                top: 0px;
            }
            50%{
                top:${win.innerHeight - this.el.offsetHeight}px;
            }
            100%{
                top: 0px;
            }
        }`
        const style = doc.createElement('style')
        style.type = "text/css"
        style.innerHTML = rowkeyframes + colkeyframes
        doc.getElementsByTagName('head')[0].appendChild(style)
    }
    if (typeof module !== 'undefined' && module.exports) module.exports = FloatModel;
    if (typeof define === 'function') define(function () { return FloatModel; });
    win.FloatModel = FloatModel
})(window, document)