const assert = require('assert')
const calculateNumber = require('./1-calcul')

describe('#SUM', () => {
    it('should pass for positive rounded sum', function () {
        let val = calculateNumber('SUM', 1, 3);
        assert.deepStrictEqual(val, 4)
        val = calculateNumber('SUM',1, 3.7)
        assert.deepStrictEqual(val, 5)
        val = calculateNumber('SUM',1.2, 3.7)
        assert.deepStrictEqual(val, 5)
        val = calculateNumber('SUM',1.5, 3.7)
        assert.deepStrictEqual(val, 6)
    });
    it('should pass for negative rounded sum', function () {

        let val = calculateNumber('SUM', -2.5, -3.7)
        assert.deepStrictEqual(val, -6)
        val = calculateNumber('SUM', -2.5, -3.2)
        assert.deepStrictEqual(val, -5)
        val = calculateNumber('SUM', -2, -3)
        assert.deepStrictEqual(val, -5)
        val = calculateNumber('SUM', -2.7, -3.7)
        assert.deepStrictEqual(val, -7)
    });
    it('should pass for combination of -ve and +ve rounded sum', function () {
        let val = calculateNumber('SUM', -1.5, 3.7)
        assert.deepStrictEqual(val, 3)
        val = calculateNumber('SUM', 1.2, -3.7)
        assert.deepStrictEqual(val, -3)
    });
})
/**
 * subtraction testing
 */
describe('#SUBTRACTION', () => {
    it('should pass for positive rounded subtraction', function () {
        let val = calculateNumber('SUBTRACT', 1, 3);
        assert.deepStrictEqual(val, -2)
        val = calculateNumber('SUBTRACT',1, 3.7)
        assert.deepStrictEqual(val, -3)
        val = calculateNumber('SUBTRACT',3.7, 1.2)
        assert.deepStrictEqual(val, 3)
        val = calculateNumber('SUBTRACT',3.7, 1.5)
        assert.deepStrictEqual(val, 2)
    });
    it('should pass for negative rounded subtraction', function () {

        let val = calculateNumber('SUBTRACT', -2.5, -3.7)
        assert.deepStrictEqual(val, 2)
        val = calculateNumber('SUBTRACT', -3.2, -2.5)
        assert.deepStrictEqual(val, -1)
        val = calculateNumber('SUBTRACT', -2, -3)
        assert.deepStrictEqual(val, 1)
        val = calculateNumber('SUBTRACT', -2.7, -3.7)
        assert.deepStrictEqual(val, 1)
    });
    it('should pass for combination of -ve and +ve rounded "-"', function () {
        let val = calculateNumber('SUBTRACT', -1.5, 3.7)
        assert.deepStrictEqual(val, -5)
        val = calculateNumber('SUBTRACT', 1.2, -3.7)
        assert.deepStrictEqual(val, 5)
    });
})
/**
 * division testing
 */
describe('#DIVIDE', () => {
    it('should pass for positive rounded divide', function () {
        let val = calculateNumber('DIVIDE', 4, 2);
        assert.deepStrictEqual(val, 2)
        val = calculateNumber('DIVIDE',7.7, 2.3)
        assert.deepStrictEqual(val, 4)
        val = calculateNumber('DIVIDE',5.5, 3.6)
        assert.deepStrictEqual(val, 1.5)
        val = calculateNumber('DIVIDE',1.5, 3.7)
        assert.deepStrictEqual(val, 0.5)
    });
    it('should pass for negative rounded divide', function () {

        let val = calculateNumber('DIVIDE', -2.5, -3.7)
        assert.deepStrictEqual(val, 0.5)
        val = calculateNumber('DIVIDE', -3.2, -2.5)
        assert.deepStrictEqual(val, 1.5)
        val = calculateNumber('DIVIDE', -2, -5)
        assert.deepStrictEqual(val, 0.4)
        val = calculateNumber('DIVIDE', -2.7, -3.7)
        assert.deepStrictEqual(val, 0.75)
    });
    it('should pass for combination of -ve and +ve rounded "/"', function () {
        let val = calculateNumber('DIVIDE', -1.5, 3.7)
        assert.deepStrictEqual(val, -0.25)
        val = calculateNumber('DIVIDE', 1.2, -3.7)
        assert.deepStrictEqual(val, -0.25)
        val = calculateNumber('DIVIDE', -18, 3)
        assert.deepStrictEqual(val, -6)
    });

    it('should return string message "Error"', function () {
        let val = calculateNumber('DIVIDE', 13, 0)

        assert.deepStrictEqual(val, "Error")
        val = calculateNumber('DIVIDE', -13, 0)
        assert.deepStrictEqual(val, "Error")
        val = calculateNumber('DIVIDE', 13.5, 0)
        assert.deepStrictEqual(val, "Error")
        val = calculateNumber('DIVIDE', -13.5, 0)
        assert.deepStrictEqual(val, "Error")
    });
})
