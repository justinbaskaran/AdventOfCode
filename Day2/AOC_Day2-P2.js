// Advent of Code Day 2
fs = require('fs')

fs.readFile('test1.txt', 'utf8', function (err,str) {

    if (err) {
        return console.log(err);
    }

    let lines = str.split("\n");

    let count = lines.length;
    //console.log(count);
    let maxPoints=0;

    for(let a=0;a<count;a++){

        let lineElements = lines[a].split(" ");

        // X means you need to lose, 
        // Y means you need to end the round in a draw
        // Z means you need to win.

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
       
        if (lineElements[0] == "A" && lineElements[1] == "X") { // rock
            maxPoints+=0; // needs to loose, so pick scissors
            maxPoints+=3; 
        } else if (lineElements[0] == "A" && lineElements[1] == "Y"){ //rock
            maxPoints+=3; //  needs to draw, so pick Rock
            maxPoints+=1;
        } else if (lineElements[0] == "A" && lineElements[1] == "Z"){ //rock
            maxPoints+=6; // needs to win, so pick paper 
            maxPoints+=2;
        } else if (lineElements[0] == "B" && lineElements[1] == "X"){ // paper
            maxPoints+=0; // you need to loose, so choose rock  
            maxPoints+=1; 
        }else if (lineElements[0] == "B" && lineElements[1] == "Y"){ // paper
            maxPoints+=3; // you need to draw, so choose paper
            maxPoints+=2;
        }else if (lineElements[0] == "B" && lineElements[1] == "Z"){ // paper
            maxPoints+=6; // you need to win, so choose scissors
            maxPoints+=3;
        }else if (lineElements[0] == "C" && lineElements[1] == "X"){ // scissors
            maxPoints+=0; // you need to loose, so ppick paper
            maxPoints+=2;
        }else if (lineElements[0] == "C" && lineElements[1] == "Y"){ //scissors
            maxPoints+=3; // you need to draw, so pick scissors
            maxPoints+=3;
        }else if (lineElements[0] == "C" && lineElements[1] == "Z"){ //scissors
            maxPoints+=6; // you need to win, so pick rock
            maxPoints+=1;
        } else {
            console.log("get fucked");
        }

    }


    console.log(maxPoints);




  

});