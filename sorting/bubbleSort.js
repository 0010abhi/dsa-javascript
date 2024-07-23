function bubbleSort(arr) {
    for(let i=0; i < arr.length; i++) {
        for(let j=0; j < arr.length - i -1; j++) {
            console.log('>>', i, j, j+1);
        }
    }
}

const data = [-2, 45, 11, 0, 9];
bubbleSort(data);
console.log('After Sorting', data);``