var input = [7, 5, 9, 2, 8];
console.log(input);
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        //initialise the position of smallest element
        var pos = i;
        for (var j = i; j < arr.length; j++) {
            //select store the position of the smallest element
            if (arr[j] < arr[pos])
                pos = j;
        }
        //swap the positions with the smallest element f needed
        if (pos !== i) {
            var temp = arr[i];
            arr[i] = arr[pos];
            arr[pos] = temp;
        }
    }
    return arr;
}
var output = selectionSort(input);
console.log(output);
