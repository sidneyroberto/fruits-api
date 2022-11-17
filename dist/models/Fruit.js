"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fruit = void 0;
class Fruit {
    constructor(obj) {
        this.genus = '';
        this.name = '';
        this.id = -1;
        this.order = '';
        this.family = '';
        this.carbohydrates = -1;
        this.protein = -1;
        this.fat = -1;
        this.calories = -1;
        this.sugar = -1;
        const { genus, name, id, order, family, nutritions } = obj;
        const { carbohydrates, protein, fat, calories, sugar } = nutritions;
        Object.assign(this, {
            genus,
            name,
            id,
            order,
            family,
            carbohydrates,
            protein,
            fat,
            calories,
            sugar,
        });
    }
}
exports.Fruit = Fruit;
//# sourceMappingURL=Fruit.js.map