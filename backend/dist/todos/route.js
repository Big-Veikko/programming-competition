"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.route('/todos').get(controller_1.getTodos);
router.route('/todos/:id').get(controller_1.getTodo);
exports.default = router;
