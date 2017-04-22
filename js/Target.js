/**
 * Target
 */

class Target {

    constructor(targetElement) {

        if (!(targetElement instanceof HTMLElement)) {
            throw new Error('[Error] Unexpected Parameters' + targetElement)
        }

        this.element = targetElement
    }

    choose() {
        Element.addClass(this.element, 'choosed')
    }

    unChoose() {

        Element.removeClass(this.element, 'choosed')
    }

    remove() {
        Element.setBgColor(this.element, 'rgb(235,237,240)')
        Element.removeClass(this.element, 'choosed')
        Element.setAttr(this.element, 'el-type', '0')
    }

    get type() {
        return this.element.getAttribute('el-type')
    }

    get isChoosed() {
        return Element.hasClass(this.element, 'choosed')
    }

    get key() {
        return this.element.getAttribute('matrix-key')
    }

    get bgColor() {
        return this.element.style.backgroundColor
    }

}