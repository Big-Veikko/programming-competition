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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = exports.getTodo = exports.getTodos = void 0;
const database_1 = __importDefault(require("../database"));
const getTodos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield database_1.default.todo.findMany();
        console.log(todos);
        res.json(todos);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getTodos = getTodos;
const getTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield database_1.default.todo.findUnique({
            where: {
                id: String(id)
            }
        });
        res.json(todo);
    }
    catch (error) {
        res.status(500).json({ message: "Get todo failed" });
    }
});
exports.getTodo = getTodo;
const createTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title } = req.body;
        const todo = yield database_1.default.todo.create({
            data: {
                title: title,
            }
        });
        res.json(todo);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createTodo = createTodo;
