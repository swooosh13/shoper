"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var log4js_1 = __importDefault(require("log4js"));
dotenv_1["default"].config();
var logger = log4js_1["default"].getLogger();
logger.level = process.env.LOG_LEVEL;
logger.info('log4js log info');
logger.info('log4js log debug');
logger.error('log4js log error');
var app = express_1["default"]();
var PORT = process.env.PORT;
app.get('/', function (req, res) {
    res.send('Hello world');
});
app.listen(PORT, function () {
    console.log("Server has been started on port " + PORT);
});
