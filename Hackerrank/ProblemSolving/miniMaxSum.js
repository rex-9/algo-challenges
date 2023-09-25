function miniMaxSum(arr) {
    // Write your code here
    arr = arr.sort((a, b) => a - b);
    const minArr = arr.slice(0, -1);
    const maxArr = arr.slice(1);
    const sumOfMinArr = minArr.reduce((a, c) => a + c, 0);
    const sumOfMaxArr = maxArr.reduce((a, c) => a + c, 0);
    console.log(sumOfMinArr, sumOfMaxArr);
}

miniMaxSum([5, 5, 5, 5, 5]);