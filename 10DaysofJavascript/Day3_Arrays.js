

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    nums.sort((a, b) => a - b);
    var n = nums.length;
    var ma;    
    for(var i = n-1; i>0; i--){
        ma = nums[i];        
        nums.pop();        
        if (nums[i-1]==ma){
            continue;}
        else{ 
          return nums[i-1]
            break; }   
    } 
   
}

