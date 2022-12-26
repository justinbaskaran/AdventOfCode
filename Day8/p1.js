// Advent of Code Day 
fs = require('fs')

let trees=[];

function iterateThroughMap(trees,treesBinary,row,col,columParse,rowParse){
    //console.log("binary tree value: " + treesBinary[row][col]);
   // console.log("row: " + row);
    //console.log("col: " + col);
    //console.log("prevValue: " + prevValue);
    

    if (row <trees.length && col < trees[0].length ){
        if(!rowParse && columParse){
            // find column value
            // iterate through all value sin column 
               
                let maxValue=0;
                //  top bottom
                for(let rowNum=0;rowNum<trees.length;rowNum++){
                   // console.log("Difference: "  );
                   if(trees[rowNum][col] == 5){
                    // console.log("RowCol: "+rowNum,col);
                    // console.log("MaxValue: " + maxValue);
                    // console.log("Binary: " + treesBinary[rowNum][col]);
                    // console.log("tree Value: " + trees[rowNum][col]);
                    // console.log("---------------------------------");
                }
                    //console.log("Value: " + trees[rowNum][col]);
                    if (maxValue<trees[rowNum][col]){
                       
                        maxValue=Math.max(maxValue,trees[rowNum][col]);
                        treesBinary[rowNum][col]=1;
                    } else if (rowNum == 0){
                        treesBinary[rowNum][col]=1;
                        maxValue=trees[rowNum][col];
                    }

                }
                //  bottom top
                maxValue=trees[trees.length-1][col];
                treesBinary[trees.length-1][col]=1;
                for(let rowNum=trees.length-1;rowNum>0;rowNum--){
                  
                    if (maxValue<trees[rowNum][col]){
                    
                        maxValue=Math.max(maxValue,trees[rowNum][col]);
                        treesBinary[rowNum][col]=1;
                    }
                }
       
        } else if (rowParse && !columParse) {
            // find row value
            // iterate through all value sin row 
            let maxValue=0;
            //  left right
            for(let colNum=0;colNum<trees.length;colNum++){ 
                // if (trees[row][colNum] ==3 ) {
                //     console.log("MaxValue: "+ maxValue);
                //     console.log("Value: "+ trees[row][colNum]);
                //     console.log("Binary: " + treesBinary[row][colNum]);
                //     console.log("-----------");
                // }
                if (treesBinary[row][colNum] == 0 && maxValue<trees[row][colNum]){
                   
                    maxValue=Math.max(maxValue,trees[row][colNum]);
                    treesBinary[row][colNum]=1;
                }else if (colNum == 0){
                    treesBinary[row][colNum]=1;
                    maxValue=trees[row][colNum];
                }
            }
            //  right left
            maxValue=trees[trees.length-1][col];
            treesBinary[trees.length-1][col]=1;
            for(let colNum=trees.length-1;colNum>0;colNum--){       
                if (treesBinary[row][colNum] == 0 && maxValue<trees[row][colNum]){
                   

                    maxValue=Math.max(maxValue,trees[row][colNum]);
                    treesBinary[row][colNum]=1;
                } else if (colNum == trees.length-1){
                    treesBinary[row][colNum]=1;
                    maxValue=trees[row][colNum];
                }
            }
       
        } 
      
    } 
  //  console.log("Reached here " );
   
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
        //console.log("rowNum here: " + trees.length );
        iterateThroughMap(trees,treesBinary,rowNum,0,false,true);
    }
    //Iterate left right top
    for (let colNum=0;colNum<trees[0].length;colNum++){
        iterateThroughMap(trees,treesBinary,0,colNum,true,false);
    }


    for (const row of treesBinary ){
        for (const col of row ){
            if (col == 1){
                answer+=1;
            }
        }
    }



        
    //console.log(trees);
    //console.log(treesBinary);

    console.log("Answer Part1: " + answer);




    
});

