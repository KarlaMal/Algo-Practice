//write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

function order(array){
    count = 0;
    for(var i=0;i<array.length;i++){
        if(array[i] !== 0){
            array[count] = array[i]
            count++;
        }
    }
    while(count < array.length){
        array[count] = 0
        count++
    }
    return array
}
console.log(order([0,8,5,0,2,6,0]))

var wordPattern = function(pattern, str) {
    var result = false;
    var words = str.split(' ');
    
    var hash = {};
    var used = {};
    var index = 0;
    
    if (words.length === pattern.length) {
        for (var i=0; i<words.length; i++) {
            if (!hash[words[i]] && !used[pattern[index]]) {
                hash[words[i]] = pattern[index];
                used[pattern[index]] = true;
            }
            else {
                if (hash[words[i]] !== pattern[index]) {
                    break;
                }
            }
            index++;
        }
        if (index === pattern.length) {
            result = true;
        }
    }
    return result;
};