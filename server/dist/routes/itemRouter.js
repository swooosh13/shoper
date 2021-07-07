"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var itemController_1 = __importDefault(require("../controllers/itemController"));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var router = new express_1["default"]();
router.post('/', itemController_1["default"].create);
router.get('/', itemController_1["default"].getAll);
router.get('/:id', itemController_1["default"].getOne);
exports["default"] = router;
