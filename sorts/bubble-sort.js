function bubbleSort(arr) {
   let swapped = false; 
    do {
        swapped = false;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i + 1]) {
                const temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                swapped = true;
            }
        }
    }while(swapped);

    return arr;
}
