// Advent of Code Day 
fs = require('fs')



fs.readFile('test1.txt', 'utf8', function (err,str) {

    if (err) {
        return console.log(err);
    }

    let lines = str.split("\n");



    
    for(let a=0;a<lines[0].length;a++){
        let char;
        if (a+3<lines[0].length){
            charString = lines[0].substring(a, a+14);
            let charSet=new Set();
            let uniqueCount=0;
            for(let b=0;b<14;b++){
                if (!charSet.has(charString[b])){
                    charSet.add(charString[b]);
                    uniqueCount++;
                } else {
                    break;
                }
            }
            if (uniqueCount == 14){
                console.log("Answer is: " + (a+14));
                break;
            }
            
         
        } else {
            break;
        }
    }


/*

nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg
nznr-false
znrn-false
nrnf-false
rnfr-false
frfn-false
rfnt-true
*/


  


    
});

