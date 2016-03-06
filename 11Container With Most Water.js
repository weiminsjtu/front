/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var i=0,j=height.length -1,result=0;
    
    while(i<j){
        var area = (j-i)*Math.min(height[i],height[j]);
        result = Math.max(result,area);
        if(height[i]<=height[j]){
            i++;
        }else{
            j--;
        }
    }
    
    return result;
};
