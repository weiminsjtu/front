/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var roman = {
		I : 1,
		V : 5,
		X : 10,
		L : 50,
		C : 100,
		D : 500,
		M : 1000
	};
	var sum=0,i=0,len=s.length;
	while(i<len){
	    var cur = roman[s[i]],next=roman[s[i+1]];
	    if(next && cur < next){
	        sum = sum - cur;
	    }else{
	        sum = sum + cur;
	    }
	    i++;
	}
	return sum;
	
};
