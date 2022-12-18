// Advent of Code Day 
fs = require('fs')

class Node{
    parent = '';
    sizeOfFiles=0;
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
    if (node == null){
        return;
    }
    if (rootNode.parent== node.parent) {
        rootNode.sizeOfFiles = node.sizeOfFiles;
        rootNode.nodeList = node.nodeList;
  //      rootNode.nodeList[i]=node;
        return;
    } 
    for (const nodeItem of rootNode.nodeList){
        addNode(nodeItem,node); 
    } 
    
}

fs.readFile('test.txt', 'utf8', function (err,str) {

    if (err) {
        return console.log(err);
    }


    /* Parse Output & assemble Tree  */
    let lines = str.split("$ cd ");
    lines=lines.slice(1,lines.length);
    
    //console.log(lines);
    for(let a=0;a<lines.length;a++){
        let line = lines[a].split("\n");
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
                addNode(this.rootNode,nodeItem);
            }

            //addNodeSizetoNode(sizeOfFolder,characterDir,rootNode);
          

        }
    }
    console.log("Final Root Node: ");
    console.log(JSON.stringify(this.rootNode));


    /*  Tree Taversal Goal: Find which branch of tree has a sum of at most 10,000 */
    //console.log(rootNode);







    
});
