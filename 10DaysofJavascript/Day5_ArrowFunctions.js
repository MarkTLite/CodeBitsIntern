

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    const newarray = nums.map((a) => {
        if ((a%2) == 0){ return a*2  }
        else {return a*3}
         } )
    return newarray;         
}

