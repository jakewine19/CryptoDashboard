function getExt(filename){
    let splitter = filename.slice(filename.lastIndexOf('.'));
    return splitter;
}

console.log(getExt('jake.winemiller.js'));