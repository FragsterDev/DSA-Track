const input = [7,5,9,2,8];

console.log(a);

function selectionSort(arr) {
    for(let i=0;i<arr.length;i++){
        //initialise the position of smallest element
        let pos = i;

        for(j=i;j<arr.length;j++){
            //select store the position of the smallest element
            if(arr[j]<arr[pos])
                pos = j
        }

        //swap the positions with the smallest element
        let temp = arr[i];
        arr[i] = arr[pos];
        arr[pos] = temp;
    }
    return arr
}

const output = selectionSort(input)

console.log(output);