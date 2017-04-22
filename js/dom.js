let dom = {

    createDiv: function () {
        return document.createElement('div')
    },

    setFloat: function (el) {
        el.style.float = 'left'
        return this
    },

    setBgColor: function (el, bgColor) {
        el.style.backgroundColor = bgColor
        return this
    },

    setWidthAndHeight: function (el, width, height) {
        el.style.width = width + 'px'
        el.style.height = height + 'px'
        return this
    },

    insert: function (el, target) {
        el.appendChild(target)
    },

    hasClass: function (el, className) {
        return el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    },

    addClass: function (el, className) {
        if (!dom.hasClass(el, className)) el.className += " " + className;
        return this
    },

    removeClass(elements, className){
        if (dom.hasClass(elements, className)) {
            elements.className = elements.className.replace(new RegExp("(\\s|^)" + className + "(\\s|$)"), " ");
        }
    },

    setAttr(el, attrName, attrValue){
        el.setAttribute(attrName, attrValue)
        return this;
    },

    addEvent: function (el, type, fn) {
        if (el.addEventListener) {
            el.addEventListener(type, fn, false)
        } else if (el.attachEvent) {
            el.attachEvent('on' + type, fn)
        } else {
            el['on' + type] = fn;
        }
        return this;
    }
}