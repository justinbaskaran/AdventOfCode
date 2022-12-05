// Advent of Code Day 1
fs = require('fs')

fs.readFile('test1.txt', 'utf8', function (err,str) {

    if (err) {
        return console.log(err);
    }

    let lines = str.split("\n\n");

    let count = lines.length; // are you sure the lines are 5 ? Let's get it at runtime. 
    //console.log(lines);

    let listCalories=[];


    for(let i=0;i<count;i++){
        let totalCalories = 0;
        let numbers = lines[i].split("\n");
        for (let a=0;a<numbers.length;a++){
            if (parseInt(numbers[a]) != NaN){
                //console.log(parseInt(numbers[a]));
                totalCalories+=parseInt(numbers[a]);
            }
        }

        listCalories.push(totalCalories);
    }

    let max1 =0;
    let max1Index=0;
    for(let b=0;b<listCalories.length;b++){
        max1 = Math.max(max1,listCalories[b]);
        if (max1 == listCalories[b]){
            max1Index = b;
        }
    }
    listCalories[max1Index]=0;



    let max2 =0;
    let max2Index=0;
    for(let d=0;d<listCalories.length;d++){
        max2 = Math.max(max2,listCalories[d]);
        if (max2 == listCalories[d]){
            max2Index = d;
        }
    }
    listCalories[max2Index]=0;


    let max3 =0;
    let max3Index=0;
    for(let f=0;f<listCalories.length;f++){
        max3 = Math.max(max3,listCalories[f]);
        if (max3 == listCalories[f]){
            max3Index = f;
        }
    }
    listCalories[max3Index]=0;
    console.log(max1);
    console.log(max2);
    console.log(max3);
    console.log(max1 + max2 + max3);

});


