//find the power of 4

function powerOfFour(x){
    return (Math.log(x)/Math.log(4) % 1 ===0);
}

//Reverse a string 
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

function reverseString(str){
    var divide = str.split('');
    var reversedArray = divide.reverse();
    return reversedArray
}
console.log(reverseString('hello'))

//Write a function that takes a string as input and reverse only the vowels of a string

var reverseVowels = function(s) {
    var result = '';
    var str = s.split('')
    
    var end = s.length - 1;
    for (var i=0; i<str.length; i++) {
        if (i > end) {
            // We're done.
            break;
        }

        // Find first vowel from end of string.
        while (end >= 0) {
            if ('aAeEiIoOuU'.indexOf(str[end]) !== -1) {
                // We have a vowel.
                break;
            }
            
            end--;
        }
        
        if ('aAeEiIoOuU'.indexOf(str[i]) === -1) {
            // Consonant, do nothing.
        }
        else {
            // Vowel, swap with end.
            var temp = str[end];
            str[end] = str[i];
            str[i] = temp;
            
            end--;
        }
    }
    
    result = str.join('');
    
    return result;
}