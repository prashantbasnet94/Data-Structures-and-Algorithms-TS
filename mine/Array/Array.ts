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

    public pop(){
        delete this.data[this.length-1]
        this.length--;
    }

    public printArray(){
        console.log(this.data)
        console.log(this.length)
    }

    public delete(index:number){
        this.shiftItems(index)
    }

    public shiftItems(index:number){

        //run loop to shift and replace the item from the index
        for
        ( let startFromGivenIndex =index;startFromGivenIndex<this.length-1;startFromGivenIndex++)
        {
            this.data[startFromGivenIndex]= this.data[startFromGivenIndex+1]
        }

        // Last item is moved a step ahead but also exist at the same place @ the end
        // we need to delete the original last item
        // { '0': 5, '1': 15, '2': 25, '3': 35 }
        // { '0': 5, '1': 15, '2': 35, '3': 35 }

        delete this.data[this.length-1];
        this.length--;

    }

}

let object_of_array = new Array_Made();
object_of_array.push(5)
object_of_array.push(15)
object_of_array.push(25)
object_of_array.push(35)
object_of_array.printArray()

object_of_array.delete(2)
object_of_array.printArray()
