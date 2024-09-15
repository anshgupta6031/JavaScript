/* Implement a findIndex function that returns the index of the element in an array that satisfies a given condition. */
//  Use case of Higher Order Function...


const findIndex = (callback, nums) => {
    let index = -1;
    for(let i=0; i<nums.length; i++){
        if(callback(nums[i])) {
            index = i
            break;
        }
    }
    return index;
}

const arr = [1, 2, 3, 5, 7, 9]

const condition = (num) => num > 5

console.log(findIndex(condition, arr))


