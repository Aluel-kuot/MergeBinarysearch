
// quiz1
// Given an array of unsorted numbers, return the index of the following
//  target if the target exists in the array.
//  If the target is not found, return null
// let target = 6
// 
function numbers(num){
    if (num.length<=1){
    return num;
}
let middle=Math.floor(num.length/2)
let left=num.slice(0,middle)
let right=num.slice(middle)
return sorting(numbers(right),numbers(left))
}

function sorting(right,left){
    let newArrays=[]
    while (left.length && right.length){
       if(left[0]<right[0]){
    newArrays.push(left.shift())
       }
    else{
      newArrays.push(right.shift())  
    }
}
return[...newArrays,...left,...right]
}
let nums= [45,12,6,89,2,5]
console.log(numbers(nums))

function binary(nums,target){
    let left=0;
    let right=nums.length-1
    while (left <=right){
        let middle=Math.floor(left+right/2)
        if (nums[middle]===target){
            return middle
        }
else if (nums[middle] < target){
left =middle+1
    }
    else {
    right=middle-1
    }

}
return null
}
let num=[45,12,6,89,2,5]
let target =6
console.log(binary(nums,target))


// //quiz2
// // Given an unsorted array of numbers return the sorted array in descending order

function arrays(array){
    if (array.length<=1){
    return array;
    }

let middle=Math.floor(array.length/2)
let left=array.slice(0,middle)
let right=array.slice(middle)
 return sort(arrays(left), arrays(right))
}
function sort(left,right){
    let newArray =[]
    while(right.length && left.length){
    if(left[0]>right[0]){
    newArray.push (left.shift())
    }
else{
    newArray.push(right.shift())
}
 }
return [...newArray,...left,...right]
}
let  arr=[123,89,5,23,9,56];
console.log(arrays(arr))
// // quiz3
// // Given the following array, search for the following target
function binarySearch(numbers,targeted){
    let left = 0;
    let right = numbers.length -1;

    while(left < right){
        let middle = Math.floor((left+right)/2)
        if(numbers[middle] === targeted){
        return targeted
        }
else if(numbers[middle] < targeted){
left = middle +1
}
else{
    right = middle -1
}
    }
    return null
}
let arr2 = [1,4,78,2,67,3];
let targeted =34
console.log(binarySearch(arr2,targeted))