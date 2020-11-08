var ReversingString = /** @class */ (function () {
    function ReversingString(givenText) {
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
        for (var reversingArrayDecrementingIndex = stringLength - 1; reversingArrayDecrementingIndex >= 0; reversingArrayDecrementingIndex--) {
            reversedArray.push(stringToArray[reversingArrayDecrementingIndex]);
        }
        // finally merge the array
        console.log(reversedArray.join(''));
    };
    return ReversingString;
}());
var object = new ReversingString("My Name");
object.reverseMyString();
