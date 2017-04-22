export default class Element {

    constructor(el) {
        this.el = el
    }

    setFloat() {
        Element.setFloat(this.el)
        return this
    }

    setBgColor(bgColor) {
        Element.setBgColor(this.el, bgColor)
        return this
    }

    setWidthAndHeight(width, height) {
        Element.setWidthAndHeight(this.el, width, height)
        return this
    }

    hasClass(className) {
        return Element.hasClass(this.el, className)
    }

    addClass(className) {
        Element.addClass(this.el, className)
        return this
    }

    removeClass(className) {
        Element.removeClass(this.el, className)
        return this
    }

    setAttr(attrName, attrValue) {
        Element.setAttr(this.el, attrName, attrValue)
        return this
    }

    addEvent(type, fn) {
        Element.addEvent(this.el, type, fn)
        return this
    }

    append(content) {
        Element.append(this.el, content)
        return this
    }

    mount(target) {
        Element.append(target, this)
    }

    static createDiv() {
        return document.createElement('div')
    }

    static createBtn() {
        return document.createElement('button')
    }

    static setFloat(el) {
        el.style.float = 'left'
        return this
    }

    static setBgColor(el, bgColor) {
        el.style.backgroundColor = bgColor
        return this
    }

    static setWidthAndHeight(el, width, height) {
        el.style.width = width + 'px'
        el.style.height = height + 'px'
        return this
    }

    static append(el, content) {

        if (content instanceof HTMLElement) {
            el.appendChild(content)

        } else if (content.el && content.el instanceof HTMLElement) {
            el.appendChild(content.el)

        } else if (Array.isArray(content)) {
            for (let item of content) {
                el.append(item.el)
            }

        } else {

        }

    }

    static hasClass(el, className) {
        return el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }

    static addClass(el, className) {
        if (!Element.hasClass(el, className)) {
            el.className += el.className ? ` ${className}` : className
        }
        return this
    }

    static removeClass(elements, className) {
        if (Element.hasClass(elements, className)) {
            elements.className = elements.className.replace(new RegExp("(\\s|^)" + className + "(\\s|$)"), " ");
        }
    }

    static setAttr(el, attrName, attrValue) {
        el.setAttribute(attrName, attrValue)
        return this;
    }

    static addEvent(el, type, fn) {
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





