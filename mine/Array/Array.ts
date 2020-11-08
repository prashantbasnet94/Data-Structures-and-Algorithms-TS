type arrayDataStructure = {[index:number]:number};

class Array_Made {
    // Define the length attribute
    private length : number;

    // Define a data structure to hold the value
    private data  : arrayDataStructure;

    // Define a constructor to initialize it
    constructor() {
        this.length =0;
        this.data =Object.create({});
    }


    // Define a push function
    public push(incomingNumber:number){
        if(typeof incomingNumber === 'number'){
            this.data[this.length] = incomingNumber;
            this.length++;
        }
    }

    public printArray(){
        console.log(this.data)
        console.log(this.length)
    }

}

let object_of_array = new Array_Made();
object_of_array.push(5)
object_of_array.push(15)
object_of_array.printArray()
