//check if there are suplicates

function isUnique(arr){
    for(var i = 0; i<arr.length; i++){
        for(var j = i+1; j <arr.length; i++){
            if(arr[i]=== arr[j]){
                return true;
            }
        }
    }
    return false
}

//Given a sorted integer array without duplicates, return the summary of its ranges.
var summaryRanges = function(nums) {
    var strArray = [],
        start = nums[0] + "",
        end,
        str;
        
    for (var i = 0; i < nums.length; i++) {
        if ( i+1 !== nums.length && nums[i] + 1 !== nums[i+1]) {
            end = nums[i] + "";
            if (end !== start) {
                str = start + '->' + end;
            } else {
                str = start;
            }
            strArray.push(str);
            start = nums[i+1] + "";
        } else if (i+1 == nums.length) {
            end = nums[i] + "";
            if (start === end) {
                strArray.push(start) ;
            } else {
                strArray.push(start + '->' + end);
            }
        }
    }
    
    return strArray;
    
};