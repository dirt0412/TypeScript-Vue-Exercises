class Calc2 {
    // id: number;
    // title: String;
    // amount: number;

    dataArray = [
        {
            "id": 28,
            "Title": "Sweden",
            "amount": 440.3649
        },
        {
            "id": 56,
            "Title": "USA",
            "amount": 69.5598
        },
        {
            "id": 89,
            "Title": "England",
            "amount": 439.7276
        },
        {
            "id": 20988,
            "Title": "Sweden",
            "amount": 50.1149
        },
        {
            "id": 71,
            "Title": "USA",
            "amount": 644.5668
        },
        {
            "id": 2,
            "Title": "Sweden",
            "amount": 799.9900
        }
    ]

    constructor() {
        console.log('creating new instance of Calc1');
    }

    sumAmount() {
        let sumTotalAmount: number;
        sumTotalAmount = 0;
        this.dataArray.forEach(function (value) {
            sumTotalAmount = Number(sumTotalAmount.toFixed(4)) + Number(value.amount.toFixed(4))
        });
        return sumTotalAmount;
    }

}

// Export a singleton instance in the global namespace
export const calc2Methods = new Calc2();