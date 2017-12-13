const myPower = require('../../../../src/common/util/math/Power');
const assert = require('chai').assert;
const inpNum = 3;
const numString = inpNum.toString();


describe('myPower', function() {
    describe('toCube', function() {
        it('toCube(' + inpNum + ') should return cubed value of "' + Math.pow(inpNum, 3) + '"', function() {
            let result = myPower.toCube(inpNum);
            assert.equal(result, inpNum * inpNum * inpNum);
        });

        it('toCube should return type number', function() {
            let result = myPower.toCube(inpNum);
            assert.typeOf(result, typeof inpNum);
        });
    });
});

describe('myPower', function() {
    describe('toSquare', function() {
        it('toSquare(' + inpNum + ') should return number value of "' + Math.pow(inpNum, 2) + '"', function() {
            let result = myPower.toSquare(inpNum);
            assert.equal(result, inpNum * inpNum);
        });

        it('toSquare should return type number', function() {
            let result = myPower.toSquare(inpNum);
            assert.typeOf(result, typeof inpNum);
        });
    });
});