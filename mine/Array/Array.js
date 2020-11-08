var Array_Made = /** @class */ (function () {
    // Define a constructor to initialize it
    function Array_Made() {
        this.length = 0;
        this.data = Object.create({});
    }
    // Define a push function
    Array_Made.prototype.push = function (incomingNumber) {
        if (typeof incomingNumber === 'number') {
            this.data[this.length] = incomingNumber;
            this.length++;
        }
    };
    Array_Made.prototype.printArray = function () {
        console.log(this.data);
        console.log(this.length);
    };
    return Array_Made;
}());
var object_of_array = new Array_Made();
object_of_array.push(5);
object_of_array.push(15);
object_of_array.printArray();
