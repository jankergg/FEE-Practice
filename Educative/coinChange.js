function coinChange(coins, amount) {
    if (coins.length < 1) {
        return 0;
    }
    let res = 0;
    while (amount > 0) {
        if (coins.length === 0 && amount) {
            return -1;
        }
        let coin = coins.pop();
        // go to next coin
        if (coin > amount) {
            continue;
        }
        res += Math.floor(amount / coin);
        amount -= res * coin;
    }

    return res;
}
console.log(coinChange([1, 2, 5, 10], 3));
