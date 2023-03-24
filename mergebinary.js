
// quiz1
// Given an array of unsorted numbers, return the index of the following
//  target if the target exists in the array.
//  If the target is not found, return null
// let target = 6
let num = [45,12,6,89,2,5]
console.log(num.sort())
function binary (num,output){
    let left = 0;
    let right = num.length-1;
    while (left <= right){
        let middle = Math.floor((left + right)/2);
    if (num[middle]===output){
        return middle;
    }
    else if (num
        [middle]<output){
        left = middle+1;
    }
    else{
        right = middle-1;
    }
}
return null
}
let output = 6;
let number = [45,12,6,89,2,5]
console.log(binary(num,output))
//quiz2
// Given an unsorted array of numbers return the sorted array in descending order
let arr=[123,89,5,23,9,56];
console.log(arr.sort())
console.log(arr.reverse())
//quiz3
// Given the following array, search for the following target
function binary (arr2,target){
    let left = 0;
    let right = arr2.length-1;
    while (left <= right){
        let middle = Math.floor((left + right)/2);
    if (arr2[middle]===target){
        return middle;
    }
    else if (arr2
        [middle]<target){
        left = middle+1;
    }
    else{
        right = middle-1;
    }
}
return null
}
let arr2 = [1,4,78,2,67,3];
let target = 34;
console.log(binary(arr2,target))