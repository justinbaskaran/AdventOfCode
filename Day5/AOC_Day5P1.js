// Advent of Code Day 2
fs = require('fs')



fs.readFile('test1.txt', 'utf8', function (err,str) {

    if (err) {
        return console.log(err);
    }

    let lines = str.split("\n\n");

    let instructions = lines[1].split("\n");
    let stacks = lines[0].split("\n");
    //console.log(stacks);
    let numStacks = Math.floor(((stacks[stacks.length-1]).length)/3);
    let map = new Map();
    for(let a=0;a<numStacks;a++){
        map.set(a+1,new Array());
    }
    stacks.pop();

    let d=0;
    for (let b=1;b<stacks[0].length;b+=4){
        
        for(let c=0;c<stacks.length;c++){
            let characterString = stacks[c][b];
            if (characterString == ' '){
                characterString=null;
            }
            let stackOfLetters = map.get(d+1);
            stackOfLetters.push(characterString);
            map.set(d+1,stackOfLetters);
            
        }
        d++;
    }
    
    for(let e=0;e<stacks.length;e++){
       let mapReverse= map.get(e+1).reverse();
       while (mapReverse[mapReverse.length-1] == null ){
            mapReverse.pop();
       }
       map.set(e+1,mapReverse);
    }
   ///console.log(map);


    for(let f=0;f<instructions.length;f++){
        let instruction = instructions[f];
        let splitInstruction = instruction.split(" ");
        //console.log(splitInstruction);
        let from = parseInt(splitInstruction[3]);
        let to = parseInt(splitInstruction[5]);
        let num = parseInt(splitInstruction[1]);
        //console.log(from);
        //console.log(to);
        //console.log(num);

        let transferArray = [];
        let start = map.get(from);
        for (let g=0;g<num;g++){
            if (start[start.length-1] != null){
                transferArray.push(start.pop());
            } else if (start[start.length-1] == null) {
                while(start[start.length-1] == null) {
                    start.pop();
                }
            }
            
        }
        //console.log(transferArray);
        
        let stackOfLetters = map.get(to);
        map.set(to,stackOfLetters.concat(transferArray)); 
        //console.log(map);
    }
    console.log(map);
    let answer='';
    for (let u=1;u<numStacks+1;u++){
        answer+=map.get(u).pop();
    }
    console.log(answer);

    
});

//[Z] [M] [P]
//1234567891011
//1
//5
//9