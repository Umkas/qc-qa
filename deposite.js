const calculateProfit = (amount, percent, period) => {
    profit = amount;
    for (let i=1; i <= period; i++){
        profit += profit*percent/100;
        console.log(i + "  " + profit);
    }
    console.log('clear profit = ' + (profit-amount).toFixed(2))
}

calculateProfit(10000, 4, 3);