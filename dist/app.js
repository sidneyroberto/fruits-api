"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const fruits_1 = require("./routes/fruits");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use((0, morgan_1.default)('dev'));
exports.app.use('/fruits', fruits_1.fruitsRouter);
exports.app.use('/', (req, res) => res.send(`
    Fruits API. A wrapper for Fruityvice - with CORS!
    <br/>Endpoint: /fruits/:fruitName
  `));
//# sourceMappingURL=app.js.map