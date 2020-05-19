// Get 1 to 255
function count(){
    for (var i = 1; i < 256; i++){
        console.log(i)
    }
}
console.log(count())

//Get even 1000

function getEven(){
    for(var i = 0; i < 1000; i+=2){
        console.log(i)
    }
}
console.log(getEven())

// Sum odd 5000
function sumOdd(){
    var sum = 0;
    for (var i = 1; i <= 50; i++){
        if(i % 2 == 1){
            sum += i;
        }
    }
    return sum
}
console.log(sumOdd())

// Sum of all the values within an array

function sumArray(arr){
    var sum =0;
    for (var i =0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(sumArray([6,7,8,9]))

//Find Max
function findMax(arr){
    var max = arr[0]
    for(var i =0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
console.log(findMax([6,7,8,9]))
// Find Average

function findAvg(arr){
    var avg = 0;
    for (var i =0; i < arr.length; i++){
        avg += arr[i]
    }
    return avg/arr.length
}
console.log(findAvg([6,7,8,9]))

// Return an array of all the odd numbers
function oddNums(arr){
    var odd = []
    for (var i =0; i < arr.length; i++){
        if(arr[i]% 2 == 1){
            odd.push(arr[i])
        }
    }
    return odd
}
console.log(oddNums([6,7,8,9]))

// Greater than Y
function greaterY(arr, y){
    var count = 0
    for (var i =0; i < arr.length; i++){
        if(arr[i]> y){
            count ++
        }
    }
    return count
}
console.log(greaterY([4,8,14,3], 5))

// replace each value in the array with the product of the original value multiplied by itself
function squared(arr){
    for (var i =0; i < arr.length; i++){
      arr[i] = arr[i] * arr[i]
    }
    return arr
}
console.log(squared([4,8,14,3]))

//  Replace any negative numbers within the array
function noNeg(arr){
    for (var i =0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0
        }
    }
    return arr
}
console.log(noNeg([-4,8,14,3,-12,18]))

// Return new array with the maximum, minimum, and average values
function maxMinAvg(arr){
    var max= 0;
    var min = 0;
    var sum = 0;
    for (var i =0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
        if(arr[i]> max){
            max = arr[i]
        }
        sum =+ arr[i]
        avg = sum/ arr.length
        var dets = ['max is', max, 'min is', min, 'avg is', avg]
    }
    return dets
}
console.log(maxMinAvg([-4,8,14,3,-12,18]))

// Swap the first and last values of any given array
function swap(arr){
    var temp = arr[0]
    arr[0] = arr[arr.length-1]
    arr[arr.length-1] = temp
    return arr
}
console.log(swap([3,7,9,4,6]))

// replace any negative values within the array with a string

function numToStr(arr){
    for (var i =0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 'Hello'
        }
    }
    return arr
}
console.log(numToStr([6,-2,7,9,-2,4]))