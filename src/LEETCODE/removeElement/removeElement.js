var removeElement = function(nums, val) {

    let r = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[r++] = nums[i];
        }
    }

    console.log(nums);
    return r;
};

console.log(removeElement([3,2,2,3], 3));