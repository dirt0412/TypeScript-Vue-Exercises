import dataColors from '../data/dataColors.json';

class Calc2 {
    colors: [{ color: '', code: { hex: '' }, cell: [0, 0] }];
    colorsWithCells: [{ hex: '', cell: [0, 0] }];

    constructor() {
        this.colors = [{ color: '', code: { hex: '' }, cell: [0, 0] }];
        this.colorsWithCells = [{ hex: '', cell: [0, 0] }];
        console.log('creating new instance of Calc2');
    }

    async getDataJSON() {
        try {
            return await (<any>dataColors).colors;
        } catch (error) {
            console.log(error)
        }
    }
    async getquantityColumnsRows() {
        let quantity = 0;
        try {
            this.colors = await this.getDataJSON()
            this.colors.forEach(function (color) {
                quantity = quantity < color.cell[0] ? color.cell[0] : quantity < color.cell[1] ? color.cell[1] : quantity
            });

        } catch (error) {
            console.log(error)
        }
        return quantity;
    }
    async getHexCells() {
        let colorsWithCells = [{ hex: '', cell: [0, 0] }];
        try {

            //this.colors = this.getDataJSON()
            this.colors.forEach(function (color) {
                colorsWithCells.push({ hex: color.code.hex, cell: color.cell });
            });
        } catch (error) {
            console.log(error)
        }
        return colorsWithCells
    }
    async calculateTableColors(quantityColRows = 0) {
        let rowColumnsSizeTable = [];
        let arrayColorsWithCells = await calc2Methods.getHexCells();

        let contentData = new Array(quantityColRows);
        for (let i = 0; i < quantityColRows; i++) {
            contentData[i] = [];
        }

        try {
            for (let i = 0; i < quantityColRows; i++) {
                rowColumnsSizeTable.push(i + 1); // fill for columns rows
                for (let j = 0; j < quantityColRows; j++) {
                    let obj = arrayColorsWithCells.find(
                        n =>
                            Number(n.cell[0]) === Number(i + 1) &&
                            Number(n.cell[1]) === Number(j + 1)
                    );
                    if (obj !== undefined) {
                        contentData[i][j] = obj.hex;
                    } else contentData[i][j] = "";
                }
            }
        } catch (error) {
            console.log(error)
        }
        return contentData
    }
}

// Export a singleton instance in the global namespace
export const calc2Methods = new Calc2();