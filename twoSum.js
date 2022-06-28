/* 
Function returns the first two numbers in an array that sum to target number
IN > OUT: Array-of-Numbers Number > Array-of-Numbers
Psuedocode :
    For loop over nums, i variable = 0
        For loop over nums, j variable = i + 1
            if i == j
                continue to next loop
            else if nums[i] + nums[j] == target
                return [nums[i], nums[j]]
*/
const twoSum = (nums, target) => {
    for(i = 0; i < nums.length; i++) {
        for(j = i+1; j < nums.length; j++) {
            console.log(`i, j: ${i}, ${j}`)
            if(nums[i] + nums[j] == target) {
                console.log(`i, j: ${i}, ${j}`)
                return [i, j];
            }
        }
    }
};

twoSum([3,2,4], 6);
console.log("Hellow")