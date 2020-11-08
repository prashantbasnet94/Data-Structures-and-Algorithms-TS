var ReversingString = /** @class */ (function () {
    function ReversingString(givenText) {
        var _this = this;
        this.reverse3 = function () { return _this.givenString.split('').reverse().join(''); };
        this.givenString = givenText;
    }
    ReversingString.prototype.reverseMyString = function () {
        // first find the length of the string
        var stringLength = this.givenString.length;
        var stringToArray = [];
        var reversedArray = [];
        // then run a loop and insert in a array
        // this.givenString[0] => first char
        // this.givenString[1] => second char
        for (var numberOfChar = 0; numberOfChar < stringLength; numberOfChar++) {
            stringToArray[numberOfChar] = this.givenString[numberOfChar];
        }
        // [ 'M', 'y', ' ', 'N', 'a', 'm', 'e' ]
        // then reverse the array starting from end and decrementing it
        //1st way
        for (var reversingArrayDecrementingIndex = stringLength - 1; reversingArrayDecrementingIndex >= 0; reversingArrayDecrementingIndex--) {
            reversedArray.push(stringToArray[reversingArrayDecrementingIndex]);
        }
        // 2nd way
        // finally merge the array
        reversedArray.join('');
    };
    ReversingString.prototype.reverse2 = function () {
        return this.givenString.split('').reverse().join('');
    };
    return ReversingString;
}());
var object = new ReversingString("My Name");
console.log(object.reverse3());
// console.log(object.reverse2());
// object.reverseMyString();
