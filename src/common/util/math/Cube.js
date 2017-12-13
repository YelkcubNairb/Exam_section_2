module.exports = {

    toCube: function(inpNum) {
        if (typeof inpNum === "number") {
            return Math.pow(inpNum, 3);
        } else if (typeof inpNum === "string") {
            return Math.pow(Number(inpNum), 3);
        }
    }
}