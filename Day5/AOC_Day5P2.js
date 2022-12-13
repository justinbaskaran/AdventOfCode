// Advent of Code Day 2
fs = require('fs')

fs.readFile('test2.txt', 'utf8', function (err,str) {

    if (err) {
        return console.log(err);
    }

    let lines = str.split("\n\n");

    let instructions = lines[1].split("\n");
    let stacks = lines[0].split("\n");
    //console.log(stacks);
    let numStacksArray = stacks[stacks.length-1].split("  ");
   // console.log(stacks);
    let numStacks = parseInt(numStacksArray[numStacksArray.length-1]);
    //console.log(numStacks);
    let map = new Map();
    for(let a=1;a<numStacks+1;a++){
        map.set(a,new Array());
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
        //console.log(d);
    }
    
    
    for(let e=1;e<stacks.length+1;e++){
       let mapReverse= map.get(e+1);
       while (mapReverse[mapReverse.length-1] == null ){
            mapReverse.pop();
       }
       mapReverse=mapReverse.reverse();
       map.set(e+1,mapReverse);
    }
    
    for(let x=1;x<numStacks+1;x++){
        let val = map.get(x);
        console.log(x);
        while(val[val.length-1] == null){
            val.pop();
        }
        map.set(x,val);
    }
    console.log(map);
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

        let start = map.get(from);
        let chunk = start.splice(start.length-num,start.length);
       // console.log(chunk);
        map.set(from,start);
        let finishChunk = map.get(to);
        finishChunk=finishChunk.concat(chunk);
        map.set(to,finishChunk);


        //console.log(map);
    }
   // console.log(map);
    let answer='';
    for (let u=1;u<numStacks+1;u++){
       // console.log(map.get(u).pop());
       
        answer+=map.get(u).pop();
        
    }
    console.log(answer);

    
});

//[Z] [M] [P]
//1234567891011
//1
//5
//9