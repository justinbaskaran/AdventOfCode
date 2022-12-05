const { getSystemErrorMap } = require('util');

// Advent of Code Day 2
fs = require('fs')

fs.readFile('test1.txt', 'utf8', function (err,str) {

    if (err) {
        return console.log(err);
    }

    let lines = str.split("\n");

    let count = lines.length;
    //console.log(count);
    
    /*
        (1 for Rock, 2 for Paper, and 3 for Scissors)
        (0 if you lost, 3 if the round was a draw, and 6 if you won).
        FIRST:  A for Rock, B for Paper, and C for Scissors.
        SECOND: X for Rock, Y for Paper, and Z for Scissors
        Example: 
        A Y
        B X
        C Z
    */
    let maxPoints=0;

    for(let a=0;a<count;a++){

        let lineElements = lines[a].split(" ");

        if (lineElements[1] == "X"){
            maxPoints+=1;
        } else if (lineElements[1] == "Y") {
            maxPoints+=2;
        } else if (lineElements[1] == "Z") {
            maxPoints+=3;
        }


        // A X - Stale
        // A Y - Win
        // A Z - Loss

        // B X - Loss
        // B Y - Stale
        // B Z - Win

        // C X - Win
        // C Y - Loss
        // C Z - Stale

        if (lineElements[0] == "A" && lineElements[1] == "X") {
            maxPoints+=3;
        } else if (lineElements[0] == "A" && lineElements[1] == "Y"){
            maxPoints+=6;
        } else if (lineElements[0] == "A" && lineElements[1] == "Z"){
            maxPoints+=0;
        } else if (lineElements[0] == "B" && lineElements[1] == "X"){
            maxPoints+=0;
        }else if (lineElements[0] == "B" && lineElements[1] == "Y"){
            maxPoints+=3;
        }else if (lineElements[0] == "B" && lineElements[1] == "Z"){
            maxPoints+=6;
        }else if (lineElements[0] == "C" && lineElements[1] == "X"){
            maxPoints+=6;
        }else if (lineElements[0] == "C" && lineElements[1] == "Y"){
            maxPoints+=0;
        }else if (lineElements[0] == "C" && lineElements[1] == "Z"){
            maxPoints+=3;
        }

    }


    console.log(maxPoints);




  

});