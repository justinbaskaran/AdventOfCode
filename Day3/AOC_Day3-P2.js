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

 
    for(let a=0;a<count;a+=3){
        let line1 = lines[a];
        let line2 = lines[a+1];
        let line3 = lines[a+2];
        
        let setLine1 = new Set();
        for (let b =0; b<line1.length;b++){
            setLine1.add(line1[b]);
        }
        //console.log(setLine1.entries())
        let setLine2 = new Set();
        for (let c =0; c<line2.length;c++){
            setLine2.add(line2[c]);
        }

        let setLine3 = new Set();
        for (let d=0; d<line3.length;d++){
            setLine3.add(line3[d]);
        }
    
       //console.log(setLine1.entries().next().value[0]);
        let entriesList1 = setLine1.entries();
        for (let f=0;f<setLine1.size;f++){
            let charChoosen = entriesList1.next().value[1];
            console.log(charChoosen);
            if (setLine2.has(charChoosen) && setLine3.has(charChoosen) ){
              
                listOfLetters.push(charChoosen);
                break;
            }
        }
    
        
    }

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