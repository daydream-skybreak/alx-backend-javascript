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
