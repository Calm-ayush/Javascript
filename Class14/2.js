// program to merge and remove duplicate values from arrays

function mergeUnique(arr1, arr2) {
    let arr3 = [];

    for(let i of arr1){
        if(!arr3.includes(i)){
            arr3.push(i);
        }
    }

    for(let i of arr2){
        if(!arr3.includes(i)){
            arr3.push(i);
        }
    }

    console.log(arr3);

}
const array2 = [1, 2, 3];
const array1 = [2, 3, 5];

mergeUnique(array2, array1);