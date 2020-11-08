
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
            for( let reversingArrayDecrementingIndex=stringLength-1; reversingArrayDecrementingIndex>=0;reversingArrayDecrementingIndex--){
                reversedArray.push(stringToArray[reversingArrayDecrementingIndex])

            }

        // finally merge the array
        reversedArray.join('')
     
    }

}

let object = new ReversingString("My Name")
object.reverseMyString();
