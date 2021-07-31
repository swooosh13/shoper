"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var passport_1 = require("../middleware/passport");
var brandController_1 = __importDefault(require("../controllers/brandController"));
var router = new express_1["default"]();
router.post('/', passport_1.authMiddleware, brandController_1["default"].create);
router.get('/', brandController_1["default"].getAll);
exports["default"] = router;
