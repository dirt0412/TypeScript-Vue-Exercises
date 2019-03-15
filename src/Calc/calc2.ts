import data from '../data/dataColors.json';

class Calc2 {

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
    colors: [{ color: '', code: { hex: '' }, cell: [0, 0] }];
    colorsWithCells: [{ hex: '', cell: [0, 0] }];

    constructor() {
        this.colors = [{ color: '', code: { hex: '' }, cell: [0, 0] }];
        this.colorsWithCells = [{ hex: '', cell: [0, 0] }];
        console.log('creating new instance of Calc2');
    }

    getDataJSON() {
        this.colors = (<any>data).colors;
        return this.colors;
    }
    getquantityColumnsRows() {
        this.getDataJSON()
        let temp = 0;
        this.colors.forEach(function (color) {
            temp = temp < color.cell[0] ? color.cell[0] : temp < color.cell[1] ? color.cell[1] : temp
        });
        //console.log(this.colors)
        return temp;
    }
    getHexCells() {
        let colorsWithCells = [{ hex: '', cell: [0, 0] }];
        //this.getDataJSON()
        this.colors.forEach(function (color) {
            colorsWithCells.push({ hex: color.code.hex, cell: color.cell });
            //temp = temp < color.cell[0] ? color.cell[0] : temp < color.cell[1] ? color.cell[1] : temp
        });
        //this.colorsWithCells = colorsWithCells
        return colorsWithCells
    }
}

// Export a singleton instance in the global namespace
export const calc2Methods = new Calc2();