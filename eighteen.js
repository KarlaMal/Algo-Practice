// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(nums, target) {
    for (var i = 0; i < nums.length; i++){
        for (var j = 1; j < nums.length; j++){
        if(nums[i] + nums[j] == target){
            return [i, j]
        }
        else{
            j++;
        }   
        }
    }
}
console.log(twoSum([-4,4,8,10], 8))

// Reversing an integer can be done similarly to reversing a string

function reverse(n) {
    const reversed = n.toString().split('').reverse().join(''); // turn a number into a string, then turn it into an array to reverse. 
    return Math.sign(n) * parseInt(reversed);
}
console.log(reverse(869))

function fizzBuzz(arr){
    for (var i =0; i <arr.length; i++){
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0){
            console.log('FizzBuzz')
        }
        else if(arr[i] % 3 === 0){
            console.log(arr[i],'fizz')
        }
        else if(arr[i] % 5 === 0){
            console.log(arr[i],'buzz')
        }
        else{
            console.log(arr[i])
        }
        }
        return arr
    }
    console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10, 15]))