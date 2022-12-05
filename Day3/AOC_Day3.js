// Advent of Code Day 2
fs = require('fs')

fs.readFile('test1.txt', 'utf8', function (err,str) {

    if (err) {
        return console.log(err);
    }

    let lines = str.split("\n");

    let count = lines.length;
    //console.log(count);

    let listOfLetters=[];

    for(let a=0;a<count;a++){

        // Split each string in half into two parts
        let parts = [];
        parts[0]=lines[a].slice(0,lines[a].length/2);
        parts[1]=lines[a].slice(lines[a].length/2);
        //console.log(parts);
        // Start with first part, and put each character, in set, 
        let partsMap = new Map();
        for(let b=0;b<parts[0].length;b++){
            if (partsMap.get(parts[0][b]) == null){
                partsMap.set(parts[0][b],1);
            } else {
                partsMap.set(parts[0][b],partsMap.get(parts[0][b])+1);
            }
        }
  
        // Do second part, and put each character in above set, when you hit a conflict, put that letter into a list
        for(let c=0;c<parts[1].length;c++){
            if (partsMap.get(parts[1][c]) != null){
                listOfLetters.push(parts[1][c]);
                break;       
            } 
        }
    }
   console.log('p'.charCodeAt(0)-'a'.charCodeAt(0));
    let maxPoints=0;
    for (let e=0;e<listOfLetters.length;e++){
        if (listOfLetters[e]==listOfLetters[e].toLowerCase()){
            maxPoints+=(listOfLetters[e].charCodeAt(0)-'a'.charCodeAt(0)+1);
        } else{
            maxPoints+=(listOfLetters[e].charCodeAt(0)-'A'.charCodeAt(0) + 26+1);
        }

    }
    console.log(maxPoints);




  

});