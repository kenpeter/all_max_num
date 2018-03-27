var n = 4;
var ar = [ 3, 2, 1, 3 ];

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}



// sorted now, largests at the end
ar.sort();

var lastItem = ar[n-1];
var indexArr = getAllIndexes(ar, lastItem);
console.log(indexArr.length);
