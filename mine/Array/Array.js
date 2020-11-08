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
    Array_Made.prototype.pop = function () {
        delete this.data[this.length - 1];
        this.length--;
    };
    Array_Made.prototype.printArray = function () {
        console.log(this.data);
        console.log(this.length);
    };
    Array_Made.prototype["delete"] = function (index) {
        this.shiftItems(index);
    };
    Array_Made.prototype.shiftItems = function (index) {
        //run loop to shift and replace the item from the index
        for (var startFromGivenIndex = index; startFromGivenIndex < this.length - 1; startFromGivenIndex++) {
            this.data[startFromGivenIndex] = this.data[startFromGivenIndex + 1];
        }
        // Last item is moved a step ahead but also exist at the same place @ the end
        // we need to delete the original last item
        //delete this.data[this.length-1];
        this.length--;
    };
    return Array_Made;
}());
var object_of_array = new Array_Made();
object_of_array.push(5);
object_of_array.push(15);
object_of_array.push(25);
object_of_array.push(35);
object_of_array.printArray();
object_of_array["delete"](2);
object_of_array.printArray();
