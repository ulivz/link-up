/**
 * Target
 */

class Target {

    constructor(targetElement) {

        if (!(targetElement instanceof HTMLElement)) {
            throw new Error('[Error] unExpected parameters' + targetElement)
        }

        this.element = targetElement
    }

    choose() {
        dom.addClass(this.element, 'choosed')
    }

    unChoose() {

        dom.removeClass(this.element, 'choosed')
    }

    remove() {
        dom.setBgColor(this.element, 'rgb(235,237,240)')
        dom.removeClass(this.element, 'choosed')
        dom.setAttr(this.element, 'el-type', '0')
    }

    get type() {
        return this.element.getAttribute('el-type')
    }

    get isChoosed() {
        return dom.hasClass(this.element, 'choosed')
    }

    get key() {
        return this.element.getAttribute('matrix-key')
    }

    get bgColor() {
        return this.element.style.backgroundColor
    }

}