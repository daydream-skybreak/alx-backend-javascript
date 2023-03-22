const assert = require('assert');
const calculateNumbers = require('./0-calcul')
describe('0-calcul', function () {
    describe('#calculateNumber()', function () {
        it('should return the sum of the rounded variables', function () {
            let val = calculateNumbers(1, 3);
            assert.deepStrictEqual(typeof(val), 'number')
            assert.deepStrictEqual(val, 4)
            val = calculateNumbers(1, 3.7)
            assert.deepStrictEqual(val, 5)
            val = calculateNumbers(1.2, 3.7)
            assert.deepStrictEqual(val, 5)
            val = calculateNumbers(1.5, 3.7)
            assert.deepStrictEqual(val, 6)
        });
    })
})
