// Advent of Code Day 
fs = require('fs')

class Node{
    parent = '';
    sizeOfFiles=0;
    filePathList=[];
    nodeList = new Array(); // implied that it's type Node[]
    addChild(node){
        this.nodeList.push(node);
    }

}
let rootNode;
/*
    Every Node will contain
    - It's letter
    - It's Size of all FILES under it
    - An array of folders under it
*/

function addNode(rootNode,node){
   if (rootNode == null) {return;}
    if (rootNode.parent == node.parent && node.filePathList.length == 0){
        rootNode.sizeOfFiles = node.sizeOfFiles;
        rootNode.filePathList = node.filePathList;
        rootNode.nodeList = node.nodeList;

        return;
    }
    //console.log("Root Node: " + rootNode.parent);
   // console.log("Root List: " + JSON.stringify(rootNode.nodeList));
   // console.log("ndoe to be added value: " + node.parent);
   // console.log("Parent filePathList: " + node.filePathList);
    //console.log("----------------");
    while (node.filePathList.length != 0 ){
        let firstItemFIlePath = node.filePathList.shift();
        for(const nodeItem of rootNode.nodeList){
           // console.log(" Item:" + nodeItem.parent);
           // console.log("First Item in FilePathList:" +  firstItemFIlePath);
            if (nodeItem.parent == firstItemFIlePath){
           
                addNode(nodeItem,node);
            }
        }
    } 

}


function findSize(node,size){

    if (node == null){
        return;
    } else{
       // console.log("Parent Value: " + node.parent);
      //  console.log("Parent Size: " + JSON.stringify(node.nodeList));
        size +=parseInt(node.sizeOfFiles);
        for (const nodeItem of node.nodeList){
            size = findSize(nodeItem,size); 
        } 
        return size;
    }
  
}

function traverseForSize(rootNode,mapOfSizes){
    if(rootNode == null){
        return;
    }
    if (rootNode.sizeOfFiles <= 100000){
        if (mapOfSizes == undefined){
            mapOfSizes = new Map();
        }
        mapOfSizes.set(rootNode,rootNode.sizeOfFiles);
    }
    for (const nodeItem of rootNode.nodeList){
        traverseForSize(nodeItem,mapOfSizes); 
    } 
}


fs.readFile('test.txt', 'utf8', function (err,str) {

    if (err) {
        return console.log(err);
    }

    let filePathList=[];

    /* Parse Output & assemble Tree  */
    let lines = str.split("$ cd ");
    lines=lines.slice(1,lines.length);
    
    //console.log(lines);
    for(let a=0;a<lines.length;a++){
        let line = lines[a].split("\n");
        filePathList.push(line[0]);
        if (line[0] != ".."){
            if (line[line.length-1] == '') {line.pop();}
            let nodeItem = new Node();
            let sizeOfFolder=0;
            let contents=line.slice(2,line.length);
            let characterDir = line[0];

           // console.log(contents)
            for (const content of contents){
                if (content.includes("dir ")){
                    let folderName = content.split(" ")[1];
                    let newNode = new Node();
                    newNode.parent = folderName;
                    nodeItem.addChild(newNode);
                } else {
                    sizeOfFolder+=parseInt(content.split(" ")[0]);
                }
            }
            nodeItem.parent = characterDir;
            nodeItem.sizeOfFiles = sizeOfFolder;

            if (nodeItem.parent == '/'){
                this.rootNode = nodeItem;
            } else {
               // console.log("Parent Node :" + nodeItem.parent);
               // console.log("Parent Size :" + nodeItem.sizeOfFiles);
               // console.log("Parent Nodes :" + JSON.stringify(nodeItem.nodeList));
               let path=[];
               for(const parseList of filePathList){
                   if (parseList == '..'){
                       path.pop();
                   } else {
                       path.push(parseList);
                   }
               }
              path.shift();
               nodeItem.filePathList = path;
                addNode(this.rootNode,nodeItem);
            }

            //addNodeSizetoNode(sizeOfFolder,characterDir,rootNode);
          

        }
    }
   // console.log("Final Root Node: ");
    //console.log("\n" + JSON.stringify(this.rootNode));


    /*  Tree Taversal Goal: Find which branch of tree has a sum of at most 10,000 */
    //console.log(rootNode);

    let totalDirectorySize=  new Map();
    traverseForSize(this.rootNode,totalDirectorySize);
    console.log("Total Enteries: " + totalDirectorySize.size);
 
    //console.log(totalDirectorySize);
    let answer=0;
    for (const value of totalDirectorySize.keys()){
        //console.log(value);
        let sizeNode=0;
        sizeNode= findSize(value,sizeNode);
        if (sizeNode <= 100000 ){
            //console.log("Size Node: " + sizeNode + ":  NODE: " + value);
           answer+=sizeNode;
        }  else {
            totalDirectorySize.delete(value);
        }

        // Make function to:
        // Find string in tree 
        // then calcuate "true size" of folder
        // if size is greater then 100,000, remove value
        // if size is not greater then 100,000 add to a total count

    }

    console.log("The Answer is:" + answer);
    
});
