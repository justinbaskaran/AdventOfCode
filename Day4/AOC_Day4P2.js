// Advent of Code Day 4
console.time('DEBUG')
fs = require('fs')

fs.readFile('test1.txt', 'utf8', function (err,str) {

    if (err) {
        return console.log(err);
    }

    let lines = str.split("\n");

    let count = lines.length;
    //console.log(count);

    let total=0;

    for(let a=0;a<count;a++){
        let line = lines[a].split(",");

        let first = line[0].split("-");
        let second = line[1].split("-");
        first[0]=parseInt(first[0]);
        first[1]=parseInt(first[1]);
        second[0]=parseInt(second[0]);
        second[1]=parseInt(second[1]);
        if (second[0]<first[0]){
            let temp=second;
            second=first;
            first=temp;
        }

        /*
        1-4
        3-9

        1 4
        4 9 

        2 4
        2 9

        1 6
        7 10
    
        */

        if (first[0]<second[0] && first[1] >= second[0]){
             total++;
        }   else if (first[0]==second[0]){
            total++;
        } 
        

        
    }
    console.log(total);

});
console.timeEnd('DEBUG')