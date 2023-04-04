//Mergesort
function mergeSort(numbers){
    if(numbers.length <= 1){
    return numbers
}
let middle = Math.floor(numbers.length/2)
let left = numbers.slice(0,middle)
let right = numbers.slice(middle)
return sortArrays(mergeSort(left),mergeSort(right))

}
function sortArrays(left,right){
    let newArrays =[]
    while(left.length && right.length){
    if (left <  right){
        newArrays.push(left.shift())
    }
        else{
            newArrays.push(right.shift())
        }
    }
    return [...newArrays,...right,...left]
}
let num=["home","yes","no","apple","ball","cat"]
console.log(mergeSort(num))

//Binary search

function binary(nums,target){
let left = 0;
let right = nums.length - 1;
while(left < right){
    let middle=Math.floor(left+right/2)
    if(nums[middle]===target){
        return middle
    }
    else if(nums[middle]<target){
    left=middle+1
    }
    else{
        right=middle-1
    }
}
return null
}
target="dance";
console.log(binary(num))

