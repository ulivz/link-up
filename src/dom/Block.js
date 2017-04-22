import Element from './Element'

export default class Block extends Element {

    constructor() {
        super(Element.createDiv())
    }

}