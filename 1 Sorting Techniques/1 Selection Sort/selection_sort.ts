const input: number[] = [7,5,9,2,8];

console.log(input);

function selectionSort(arr: number[]): number[] {
    for(let i=0;i<arr.length;i++){
        //initialise the position of smallest element
        let pos: number = i;

        for(let j=i;j<arr.length;j++){
            //select store the position of the smallest element
            if(arr[j]<arr[pos])
                pos = j
        }

        //swap the positions with the smallest element f needed
        if(pos !== i){
            let temp: number = arr[i];
            arr[i] = arr[pos];
            arr[pos] = temp;
        }
    }
    return arr;
}

const output: number[] = selectionSort(input);

console.log(output);