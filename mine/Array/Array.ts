class ArrayPrashant {
    arrayOfNumber : Array<number>;

    constructor(incomingArray:Array<number>) {
        this.arrayOfNumber=incomingArray;
        this.printMyArray();
    }
    printMyArray(){
        console.log(this.arrayOfNumber);
    }


}

let arrayPrashant = new ArrayPrashant([1,11,2,13,])
