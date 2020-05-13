function solveMeFirst(a, b){
    var sum = a+b;
    return sum
}
console.log(solveMeFirst(2, 3))

function allNums(arr){
    var sum = 0;
    for(var i = 0; i <arr.length; i++){
        sum += arr[i];
    }
    return sum
}
console.log(allNums([3,4,5,6]))

function compArr(a, b){
    for(var i=0; i <a.length; i++){
        for(var j=0; j<b.lenth; j++){
            if (a[i] > b[j] || b[j] > a[i]){
                console.log(1)
                i++
            }
            else{
                break;
            }
        }
    }
}
compArr([5,6,7], [3,7,7])