/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var sum = 0,s=0;
    while(x!==0){
        s=x%10;
        sum=sum*10+s;
        x=parseInt(x/10);
    }
    
    if(sum > 2147483647 || sum < -2147483647){
        return 0;
    }
    
    return sum;
};
