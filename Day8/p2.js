// Advent of Code Day 
fs = require('fs')

let trees=[];

function findDirectionUp(trees,row,col){
    let answer=0;
    let max=trees[row][col];
    for(let rowNum=row-1;rowNum>=0;rowNum--){
        if (max<=trees[rowNum][col]){
            answer++;
            break;
        } else {
            answer++;
        }
    }
    return answer;
}
function findDirectionDown(trees,row,col){
    let answer=0;
    let max=trees[row][col];
    console.log(max);
    for(let rowNum=row+1;rowNum<=trees.length-1;rowNum++){
        console.log(trees[rowNum][col]);
        if (max<=trees[rowNum][col]){
            answer++;
            break;
        } else {
            answer++;
        }
    }
    return answer;
}
function findDirectionLeft(trees,row,col){
    let answer =0;
    let max=trees[row][col];
    for(let colNum=col-1;colNum>=0;colNum--){
        // console.log(trees[row][colNum]);
        if (max<=trees[row][colNum]){
            answer++;
            break;
        } else {
            answer++;
        }
    }
    return answer;
}
function findDirectionRight(trees,row,col){
    let answer=0;
    let max=trees[row][col];
    for(let colNum=col+1;colNum<=trees[0].length-1;colNum++){
        if (max<=trees[row][colNum]){
            answer++;
            break;
        } else {
            answer++;
        }
    }
    return answer;
}

function iterateThroughMap(trees,row,col){
    if (row ==0 || col == 0 || row == trees.length-1 || col == trees[0].length -1){return 0;}
    let up = findDirectionUp(trees,row,col);
    let down = findDirectionDown(trees,row,col);
    let left = findDirectionLeft(trees,row,col);
    let right = findDirectionRight(trees,row,col);
    console.log("row col: " + row,col);
    console.log("up down left right: " + up,down,left,right);
    console.log("------------------------")
    return up*down*left*right;
}


 
fs.readFile('test.txt', 'utf8', function (err,str) {

    if (err) {
        return console.log(err);
    }
    

    let lines = str.split("\n");
    let treesBinary=[];
    for(const line of lines){
        let newList=[];
        let newListBinary=[];
        for(const lineItem of line.split("")){
            newList.push(parseInt(lineItem));
            newListBinary.push(0);
        }
        trees.push(newList);
        treesBinary.push(newListBinary);
    }

    let answer=0;

    //Iterate top down left
    for (let rowNum=0;rowNum<trees.length;rowNum++){
        for (let colNum=0;colNum<trees[0].length;colNum++){
        //console.log("rowNum here: " + trees.length );
        let total= iterateThroughMap(trees,rowNum,colNum);
        treesBinary[rowNum][colNum]=total;
     }
    }


    for (const row of treesBinary ){
        for (const col of row ){
            if (col> answer) {
                answer=col;
            }
        }
    }



        
    console.log(trees);
    console.log(treesBinary);

    console.log("Answer Part1: " + answer);




    
});

