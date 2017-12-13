module.exports = {

    toSquare: function(inpNum) {
        if (typeof inpNum === "number") {
            return Math.pow(inpNum, 2);
        } else if (typeof inpNum === "string") {
            return Math.pow(Number(inpNum), 2);
        }
    }
}