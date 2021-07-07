"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var typeController_1 = __importDefault(require("../controllers/typeController"));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var router = new express_1["default"]();
router.post('/', typeController_1["default"].create);
router.get('/', typeController_1["default"].getAll);
exports["default"] = router;
