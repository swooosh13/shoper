"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var uuid_1 = require("uuid");
var path_1 = __importDefault(require("path"));
var models_1 = __importDefault(require("../models/models"));
var ApiError_1 = __importDefault(require("../error/ApiError"));
var Item = models_1["default"].Item, ItemInfo = models_1["default"].ItemInfo;
var ItemController = /** @class */ (function () {
    function ItemController() {
    }
    ItemController.prototype.create = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_1, price, brandId, typeId, info, img, filename, item_1, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, name_1 = _a.name, price = _a.price, brandId = _a.brandId, typeId = _a.typeId, info = _a.info;
                        img = req.files.img;
                        filename = uuid_1.v4() + '.jpeg';
                        img.mv(path_1["default"].resolve(__dirname, '..', 'static', filename));
                        return [4 /*yield*/, Item.create({ name: name_1, price: price, brandId: brandId, typeId: typeId, img: filename })];
                    case 1:
                        item_1 = _b.sent();
                        if (info) {
                            info = JSON.parse(info);
                            info.forEach(function (x) { return ItemInfo.create({
                                title: x.title,
                                description: x.description,
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                itemId: item_1.id
                            }); });
                        }
                        return [2 /*return*/, res.json(item_1)];
                    case 2:
                        e_1 = _b.sent();
                        next(ApiError_1["default"].badRequest(e_1.message));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ItemController.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, brandId, typeId, limit, page, offset, items;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.query, brandId = _a.brandId, typeId = _a.typeId, limit = _a.limit, page = _a.page;
                        page = page || 1;
                        limit = limit || 9;
                        offset = page * limit - limit;
                        if (!(!brandId && !typeId)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Item.findAndCountAll({ limit: limit, offset: offset })];
                    case 1:
                        items = _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!(brandId && !typeId)) return [3 /*break*/, 4];
                        return [4 /*yield*/, Item.findAndCountAll({ where: { brandId: brandId }, limit: limit, offset: offset })];
                    case 3:
                        items = _b.sent();
                        _b.label = 4;
                    case 4:
                        if (!(!brandId && typeId)) return [3 /*break*/, 6];
                        return [4 /*yield*/, Item.findAndCountAll({ where: { typeId: typeId }, limit: limit, offset: offset })];
                    case 5:
                        items = _b.sent();
                        _b.label = 6;
                    case 6:
                        if (!(brandId && typeId)) return [3 /*break*/, 8];
                        return [4 /*yield*/, Item.findAndCountAll({ where: { brandId: brandId, typeId: typeId }, limit: limit, offset: offset })];
                    case 7:
                        items = _b.sent();
                        _b.label = 8;
                    case 8: return [2 /*return*/, res.json(items)];
                }
            });
        });
    };
    ItemController.prototype.getOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Item.findOne({
                                where: { id: id },
                                include: [{ model: ItemInfo, as: 'info' }]
                            })];
                    case 1:
                        item = _a.sent();
                        return [2 /*return*/, res.json(item)];
                }
            });
        });
    };
    return ItemController;
}());
exports["default"] = new ItemController();
