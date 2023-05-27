const removeFromArray = function(origArr, ...deleteMe) {
    for (let i = 0; i < deleteMe.length; i++){
        if(origArr.indexOf(deleteMe[i]) > -1){
            origArr.splice(origArr.indexOf(deleteMe[i]), 1);
        }   
    }
    return origArr;    
};



// removeFromArray([1, 2, 3, "cow", 4, 5, "dog", true, 2.555, 1], "dog");


// Do not edit below this line
module.exports = removeFromArray;

/*const removeFromArray = function(origArr, ...deleteMe) {
    origArr.splice(origArr.indexOf(deleteMe[0]), deleteMe.length);
    console.log(origArr);
    
}*/