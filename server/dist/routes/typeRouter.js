"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var typeController_1 = __importDefault(require("../controllers/typeController"));
var passport_1 = require("../middleware/passport");
var checkRoleMiddleware_1 = __importDefault(require("../middleware/checkRoleMiddleware"));
var router = new express_1["default"]();
router.post("/", passport_1.authMiddleware, checkRoleMiddleware_1["default"]('ADMIN'), typeController_1["default"].create);
router.get("/", passport_1.authMiddleware, typeController_1["default"].getAll);
exports["default"] = router;
