// by sliding window    
const bestPrice = function(prices, k) {
    let total = sumOfK(prices, k), maxtotal = total;
    for (let i = 0; i < prices.length - k; i++) {
        total -= prices[i];
        total += prices[i + k];
        maxtotal = Math.max(maxtotal, total);
    }
    return maxtotal;
};

function sumOfK(arr, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(bestPrice([1,2,3,1,3,4,7,1,2], 2)); // 11