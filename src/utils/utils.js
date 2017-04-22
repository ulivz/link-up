/**
 * Generates a random number for the specified interval
 * @param min
 * @param max
 * @returns {*}
 */
function createRandom(min, max) {
    return Math.random() * (max - min) + min
}

/**
 * Find the index of element
 * @param array - array
 * @param element - the element that needs to find its index
 * @param extra　extra conditon
 *        if the array is object[], you can speccify the attribute you want to find
 */
export function find(array, element, extra) {
    for (var i = 0, l = array.length; i < l; i++) {
        if ((extra ? array[i][extra] : array[i]) === element) {
            return i
        }
    }
    return -1
}

/**
 * Get a random color [From Github]
 * @returns {*}
 */
export function getColor() {
    switch (Math.floor((Math.random() * 20) / 5)) {
        case 0:
            return '#c6e48b'
        case 1:
            return '#7bc96f'
        case 2:
            return '#239a3b'
        case 3:
            return '#196127'
        default:
            return '#c6e48b'
    }
}



