import Target from './Target'
import TargetCollection from './TargetCollection'
import Block from '../dom/Block'
import Button from '../dom/Button'
import MatrixElement from '../dom/MatrixElement'

export default class Matrix {

    constructor() {

        let args = arguments, xAxis, yXias, zeroChance

        if (args.length === 2) {
            xAxis = yXias = args[0]
            zeroChance = args[1]

        } else {
            xAxis = args[0]
            yXias = args[1]
            zeroChance = args[2]
        }

        this.data = Matrix.createMatrix(xAxis, yXias, zeroChance)
        this.choices = new TargetCollection()
    }

    get dom() {
        return Matrix.createDomByMatrix(this, target => this.handle(target))
    }

    $mount(el) {
        this.mountElement = el
        this.dom.mount(el)
    }

    $destory() {
        this.mountElement.innerHTML = null
    }

    /**
     * handle the click target
     * @param target
     */
    handle(target) {

        target = new Target(target)

        if (target.type == 0) {
            console.log('Cannot choose!')
            return
        }

        if (target.isChoosed) {
            target.unChoose()
            this.choices.delete(target)

        } else {
            this.linkHandle(target)
        }
    }

    /**
     * handle the link of the target
     * @param target
     */
    linkHandle(target) {

        console.log(this.choices)

        if (this.choices.isFull) {
            let firstTarget = this.choices.deleteFirst()
            firstTarget.unChoose()
        }

        target.choose()
        this.choices.push(target)

        if (this.choices.isFull) {

            // check color
            if (!this.choices.colorCheck) {
                console.info('Cannot match color!')
                return
            }

            // check link
            let linkCheck = Matrix.linkCheck(
                this.data,
                this.choices.pointOne,
                this.choices.pointTwo
            )

            if (linkCheck) this.successLink()

        }
    }

    // if link success ...
    successLink() {

        for (let target of this.choices.collection) {
            let pos = target.key.split('-')
            this.data[pos[0]][pos[1]] = 0
            target.remove()
        }

        this.choices.empty()
    }

    /**
     * 根据随机矩阵生成对应的DOM
     * @param {Array} matrix - 矩阵
     * @param {Function} callback - 点击某个元素的回调，会返回其坐标
     * @returns {*}
     */
    static createDomByMatrix(matrix, callback) {

        if (!(matrix instanceof Matrix)) {
            throw new Error('[Error] Unexpected parameters')
        }

        let container = new Block()
        container.addClass('matrix-container')

        matrix.data.forEach((line, i) => {

            let subContainer = new Block()
            subContainer.addClass('clearfix line-container')

            line.forEach((element, j)=> {

                let matrixElement = new MatrixElement(element)
                matrixElement.setAttr('matrix-key', `${i}-${j}`)
                    .addEvent('click', e => {
                        callback && callback(
                            e.target
                        )
                    })
                subContainer.append(matrixElement)

            })

            container.append(subContainer)

        })

        let newGameBtn = new Button('New Game')
        newGameBtn.addClass('btn btn-restart')
            .addEvent('click', () => {
                matrix.$destory()
                new Matrix(7, 0.3).$mount(
                    document.getElementById('app')
                )
            })

        let btnWrapper = new Block()
        btnWrapper.addClass('btn-wrapper')
        btnWrapper.append(newGameBtn)
        container.append(btnWrapper)

        return container

        // 以下为 FP 写法

        // return new Block()
        //     .addClass('matrix-container')
        //     .append(
        //         matrix.data.map((line, i) =>
        //             new Block()
        //                 .addClass('clearfix line-container')
        //                 .append(
        //                     line.map((element, j) =>
        //                         new MatrixElement(element)
        //                             .setAttr('matrix-key', `${i}-${j}`)
        //                             .addEvent('click', e => {
        //                                 callback && callback(
        //                                     e.target
        //                                 )
        //                             })
        //                     )
        //                 )
        //         )
        //     )
        //     .append(
        //         new Block()
        //             .addClass('btn-wrapper')
        //             .append(
        //                 new Button('New Game')
        //                     .addClass('btn btn-restart')
        //             )
        //             .addEvent('click', () => {
        //                 matrix.$destory()
        //                 new Matrix(7, 0.3).$mount(
        //                     document.getElementById('app')
        //                 )
        //             })
        //     )
    }

    /**
     * 生成一个随机矩阵
     * @param {Number} xAxis
     * @param {Number} yXias
     * @param {Number} zeroChance - 0出现的概率(默认生成0和1的概率相等)
     * @returns {Array}
     */
    static createMatrix(xAxis, yXias, zeroChance) {

        if (!zeroChance) {
            zeroChance = 0.5
        }

        let matrix = new Array()

        for (let i = 0; i < xAxis; i++) {

            matrix[i] = new Array()

            for (let j = 0; j < yXias; j++) {
                matrix[i].push(
                    Math.random() >= zeroChance + 0.1 ? 1 : 0
                )
            }

        }

        return matrix
    }


    /**
     * 是否允许连接？
     * @param matrix
     * @param point1
     * @param point2
     * @returns {boolean}
     */
    static linkCheck(matrix, point1, point2) {

        let aCheck = Array.isArray
        if (!aCheck(matrix) || !aCheck(point1) || !aCheck(point2)) {
            throw new Error('[Error 01] Unexpected parameters')
        }

        let x1 = point1[0], y1 = point1[1]
        let x2 = point2[0], y2 = point2[1]

        let xmin = Math.min(x1, x2), xmax = Math.max(x1, x2)
        let ymin = Math.min(y1, y2), ymax = Math.max(y1, y2)

        let left = new Set()
        let right = new Set()

        for (let i = xmin; i <= xmax; i++) {
            left.add([i, y1])
            right.add([i, y2])
        }

        for (let j = ymin; j <= ymax; j++) {
            left.add([x2, j])
            right.add([x1, j])
        }

        function check(set) {
            for (let item of set.values()) {
                let itemStr = item.join()
                if (itemStr !== point1.join() && itemStr !== point2.join()) {
                    if (matrix[item[0]][item[1]] === 1) {
                        return false
                    }
                }
            }
            return true
        }

        if (check(left)) {
            return true

        } else if (check(right)) {
            return true

        } else {
            return false
        }

    }

}