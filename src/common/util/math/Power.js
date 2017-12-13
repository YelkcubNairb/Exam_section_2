const cube = require('./Cube');
const sq = require('./Square');

module.exports = {
    toCube: function(inpNum) {
        return cube.toCube(inpNum);
    },
    toSquare: function(inpNum) {
        return sq.toSquare(inpNum);
    }
}