"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var itemRouter_1 = __importDefault(require("./itemRouter"));
var brandRouter_1 = __importDefault(require("./brandRouter"));
var typeRouter_1 = __importDefault(require("./typeRouter"));
var userRouter_1 = __importDefault(require("./userRouter"));
var router = new express_1["default"]();
router.use('/user', userRouter_1["default"]);
router.use('/type', typeRouter_1["default"]);
router.use('/brand', brandRouter_1["default"]);
router.use('/item', itemRouter_1["default"]);
exports["default"] = router;
