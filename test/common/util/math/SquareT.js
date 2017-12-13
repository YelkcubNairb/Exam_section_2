const sq = require('../../../../src/common/util/math/Square');
const ch = require('chai').assert;
const inpNum = 2;
const numString = inpNum.toString();
describe('sq', function() {
    describe('toSquare', function() {
        it('toSquare(' + inpNum + ') should return number value of "' + Math.pow(inpNum, 2) + '"', function() {
            let result = sq.toSquare(inpNum);
            ch.equal(result, inpNum * inpNum);
        });

        it('toSquare should return type number', function() {
            let result = sq.toSquare(inpNum);
            ch.typeOf(result, typeof inpNum);
        });
    });
});