"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = require("./todos");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const corsConfig = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};
app.get('/', (req, res) => {
    res.send('Hello TypeScript!');
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', todos_1.TodoRouter);
exports.default = app;
