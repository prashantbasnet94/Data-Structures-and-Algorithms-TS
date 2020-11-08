
class ReversingString{
    private readonly givenString:string;

    constructor(givenText:string) {
        this.givenString=givenText;
    }

    public reverseMyString(){
        // first find the length of the string
        let stringLength= this.givenString.length;
        let stringToArray:Array<string>=[];
        let reversedArray:Array<string>=[];

        // then run a loop and insert in a array
        // this.givenString[0] => first char
        // this.givenString[1] => second char
        for(let numberOfChar=0; numberOfChar<stringLength;numberOfChar++){
            stringToArray[numberOfChar]=this.givenString[numberOfChar]
        }
        // [ 'M', 'y', ' ', 'N', 'a', 'm', 'e' ]
        // then reverse the array starting from end and decrementing it

        //1st way
        for( let reversingArrayDecrementingIndex=stringLength-1; reversingArrayDecrementingIndex>=0;reversingArrayDecrementingIndex--){
            reversedArray.push(stringToArray[reversingArrayDecrementingIndex])
        }

        // 2nd way

        // finally merge the array
        reversedArray.join('')
     
    }

    public reverse2(){
        return this.givenString.split('').reverse().join('')
    }

    public reverse3 =()=>this.givenString.split('').reverse().join('')

}

let object = new ReversingString("My Name")
console.log(object.reverse3());
// console.log(object.reverse2());
// object.reverseMyString();
