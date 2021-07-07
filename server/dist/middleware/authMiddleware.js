"use strict";
exports.__esModule = true;
function default_1(req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        var token = req.headers.authorization.split(' ');
    }
    catch (e) {
        res.status(401).json({ message: "Пользователь не авторизован" });
    }
}
exports["default"] = default_1;
