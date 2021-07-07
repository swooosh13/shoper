"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var ApiError_1 = __importDefault(require("../error/ApiError"));
function middleware(err, req, res, next) {
    // TODO
    // instanceof ApiError
    if (err instanceof ApiError_1["default"] || Error) {
        return res.status(err.status).json({ message: err.message });
    }
    return res.status(500).json({
        message: "Unexpected error"
    });
}
exports["default"] = middleware;
