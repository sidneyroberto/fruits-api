"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fruitsRouter = void 0;
const express_1 = require("express");
const FruitService_1 = require("../services/FruitService");
exports.fruitsRouter = (0, express_1.Router)();
const fruitService = new FruitService_1.FruitService();
exports.fruitsRouter.get('/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.params;
    const fruit = yield fruitService.searchFruit(name);
    if (fruit) {
        return res.json(fruit);
    }
    return res.status(404).json({ message: 'Fruit not found' });
}));
//# sourceMappingURL=fruits.js.map