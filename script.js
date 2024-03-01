const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  //SGN Write your code here

    //  Initialize an empty list to store subarrays (result)
	let result = [];
    // Initialize an empty subarray and set its sum to 0
	let emptSubArr = [];
	let sum = 0;
    
    // For each element num in arr:
	for (let i = 0; i < arr.length; i++) {
		//     Add num to the current subarray
		emptySubArr.push(arr[i]);
	    //     Update the sum of the current subarray
        sum += arr[i];
	    //     If the sum exceeds n:
		if(sum>n){
			//         Add the current subarray to the result
			result.push(emptySubArr.slice(0, -1));
		    //         Initialize a new empty subarray and set its sum to 0
	        emptSubArr = [arr[i]];
			sum = arr[i];
		}
	    
		
	}
    
    // If the last subarray is not empty:
	if(emptySubArr.length > 0){
		//     Add it to the result
		result.push(emptySubArr);
	}
    
    
    // Return the result
	return result;
	
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
