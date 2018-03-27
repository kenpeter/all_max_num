var n = 100000;
var ar = [];

function genInput() {
	for(var i=0; i<n-1; i++) {
		ar.push(1000);
	}
	ar.push(1);
}

function getAllIndexes(arr, val) {
    var indexes = [];
		var i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}



genInput();
// sorted now, largests at the end
ar.sort();

var lastItem = ar[n-1];
var indexArr = getAllIndexes(ar, lastItem);
console.log(indexArr.length);
