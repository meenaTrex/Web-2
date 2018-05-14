"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true
}));
const api_1 = __importDefault(require("./routes/api"));
app.use('/api', api_1.default);
app.listen(8003, () => console.log('Server started at localhost 8003'));
