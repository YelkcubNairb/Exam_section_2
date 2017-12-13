const cube = require('../../../../src/common/util/math/Cube');
const ch = require('chai').assert;
const inpNum = 3;
const numString = inpNum.toString();
describe('cube', function() {
    describe('toCube', function() {
        it('toCube(' + inpNum + ') should return cubed value of "' + Math.pow(inpNum, 3) + '"', function() {
            let result = cube.toCube(inpNum);
            ch.equal(result, inpNum * inpNum * inpNum);
        });

        it('toCube should return type number', function() {
            let result = cube.toCube(numString);
            ch.typeOf(result, typeof inpNum);
        });
    });
});