function getMinimalInterest(s, debts, interests) {
    const budget = s * 0.1;
    // first: customize data structure
    const Debts = debts
        .map((d, i) => {
            return {
                debt: d,
                intr: interests[i],
            };
        })
        .sort(function (a, b) {
            return b.intr - a.intr;
        });
    // sort as interests

    let totalPayment = 0;
    let hasDebts = debts.length;
    while (hasDebts > 0) {
        let ava = budget;
        Debts.map((debt) => {
            if (debt.debt) {
                if (ava >= debt.debt) {
                    ava -= debt.debt;
                    totalPayment += debt.debt;
                    hasDebts--;
                    debt.debt = 0;
                } else {
                    let rmd = debt.debt - ava;
                    totalPayment += ava;
                    debt.debt = rmd + rmd * (debt.intr / 100);
                    ava = 0;
                }
            }
        });
    }
    return totalPayment;
}

console.log(getMinimalInterest(50, [2, 2, 5], [200, 100, 150]));
