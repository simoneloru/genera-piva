

var generaPiva = function(input) {
	if(input != undefined && input != null && input.length == 10) {
	
		var nums = intArrayFromString(input);
		var xy = calculateXandY(nums);
		
		var x = xy[0];
		var y = xy[1];
		
		var t = (x+y)%10;
		var c = (10-t)%10;
		
		return input + c;
	}
	
	return null;
}

var verificaPiva = function(input) {
	if(input != undefined && input != null && input.length == 11) {
		
		var nums = intArrayFromString(input);
		var xy = calculateXandY(nums);
		
		var x = xy[0];
		var y = xy[1];
		
		var t = (x+y)%10;
		
		if(t == 0) {
			return true;
		}
		
	}
	
	return false;
}

var intArrayFromString = function(input) {
	// da stringa a array di int
	var chars = input.split('');
	var nums = [];
	for(var i=0; i<chars.length; i++) {
		nums.push(parseInt(chars[i]));
	} 
	
	return nums;
}

var calculateXandY = function(nums) {
	// calcolo X e Y
	var x = 0;
	var y = 0;
	for(var i=0; i<nums.length; i++) {
		if(i%2 == 0) {
			// ODD
			x += nums[i];
		} else {
			// EVEN
			var temp = 2 * nums[i];
			if(temp > 9) {
				y += temp-9;
			} else {
				y += temp;
			}
		}
	}
	
	return [x,y];
}