"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var userController_1 = __importDefault(require("../controllers/userController"));
var passport_1 = require("../middleware/passport");
var router = new express_1["default"]();
router.post('/registration', userController_1["default"].registration);
router.post('/login', userController_1["default"].login);
router.get('/auth', passport_1.authMiddleware, userController_1["default"].check);
exports["default"] = router;
