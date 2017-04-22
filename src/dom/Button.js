import Element from './Element'

export default class Button extends Element {

    constructor(text) {
        super(Element.createBtn())
        this.el.append(text)
    }

}