var ArrayPrashant = /** @class */ (function () {
    function ArrayPrashant(incomingArray) {
        this.arrayOfNumber = incomingArray;
        this.printMyArray();
    }
    ArrayPrashant.prototype.printMyArray = function () {
        console.log(this.arrayOfNumber);
    };
    return ArrayPrashant;
}());
var arrayPrashant = new ArrayPrashant([1, 11, 2, 13,]);
