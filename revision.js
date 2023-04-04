let b="one,two,three"
let c="four,five,six"
let d=b.concat(c)
console.log(d)
console.log(b.substring(1,4))
//find the last index
console.log(b.slice(-1))
console.log(b.charAt(4))
let r="father"
console.log(r.split(""))
let word = "lufituaeb";
//separates the letters
let word1 = word.split("");
 console.log(word1.sort());
 //puts them together
 console.log(word1.join())
let you=["them","they","him","your"]
//join,sort
console.log(you.join())
console.log(you.sort())
//add at the end
console.log(you.push("her"))
console.log(you)
//remove at the end
console.log(you.pop())
console.log(you.indexOf("they"))
let v="run,come, pm"
console.log(v.length)
console.log(v.toUpperCase("run"))
//finding the max and min number
let numbers=[23,45,32,67,32,98]
let max=Math.max(...numbers)
let min=Math.min(...numbers)
console.log(max)
console.log(min)
//using reduce function to find the sum of an array
let sum = numbers.reduce(function (previousValue,currentValue){
return previousValue + currentValue
})
console.log(sum)
//slice,reverse
console.log(numbers.slice(-1))
console.log(numbers.slice(2,4))
console.log(numbers.reverse())
//indexOf/lastIndexOf
console.log(numbers.indexOf(45))
console.log(numbers.lastIndexOf(32))
//includes
console.log(numbers.includes(32))


