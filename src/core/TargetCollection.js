import Target from './Target'
import {find} from '../utils/utils'

export default class TargetCollection {

    constructor(targetCollection) {

        if (targetCollection) {

            if (!Array.isArray(targetCollection)) {
                throw new Error('[Error] unExpected parameters' + targetCollection)
            }

            for (let target of targetCollection) {
                if (!(target instanceof Target)) {
                    throw new Error('[Error] unExpected parameters' + targetCollection)
                }
            }

        }

        this.collection = targetCollection || []
    }

    push(target) {
        this.collection.push(target)
    }

    deleteFirst() {
        return this.collection.pop()
    }

    empty() {
        this.collection = []
    }

    delete(target) {
        this.collection.splice(
            find(this.collection, target), 1
        )
    }

    get colorCheck() {
        return this.pointOneBgColor === this.pointTwoBgColor
    }

    get length() {
        return this.collection.length
    }

    get isFull() {
        return this.length === 2
    }

    // get coordinate 1
    get pointOne() {
        return this.collection[0].key.split('-')
    }

    // get coordinate 2
    get pointTwo() {
        return this.collection[1].key.split('-')
    }

    get pointOneBgColor() {
        return this.collection[0].bgColor
    }

    get pointTwoBgColor() {
        return this.collection[1].bgColor
    }

}