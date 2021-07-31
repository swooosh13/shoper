"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var db_1 = __importDefault(require("../config/db"));
var sequelize_1 = require("sequelize");
var User = db_1["default"].define('user', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: sequelize_1.DataTypes.STRING, unique: true },
    password: { type: sequelize_1.DataTypes.STRING },
    role: { type: sequelize_1.DataTypes.STRING, defaultValue: 'USER' }
});
var Basket = db_1["default"].define('basket', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});
var BasketItem = db_1["default"].define('basket_item', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});
var Item = db_1["default"].define('item', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    price: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    rating: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0 },
    img: { type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING), allowNull: false }
});
var Type = db_1["default"].define('type', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false }
});
var Brand = db_1["default"].define('brand', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false }
});
var Rating = db_1["default"].define('rating', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rating: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false }
});
var ItemInfo = db_1["default"].define('item_info', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    description: { type: sequelize_1.DataTypes.STRING, allowNull: false }
});
User.hasOne(Basket);
Basket.belongsTo(User);
User.hasMany(Rating);
Rating.belongsTo(User);
Basket.hasMany(BasketItem);
BasketItem.belongsTo(Basket);
Type.hasMany(Item);
Item.belongsTo(Type);
Brand.hasMany(Item);
Item.belongsTo(Brand);
Item.hasMany(Rating);
Rating.belongsTo(Item);
Item.hasMany(BasketItem);
BasketItem.belongsTo(Item);
Item.hasMany(ItemInfo, { as: 'info' });
ItemInfo.belongsTo(Item);
var TypeBrand = db_1["default"].define('type_brand', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});
// m - m
Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });
exports["default"] = {
    User: User,
    TypeBrand: TypeBrand,
    Type: Type,
    Brand: Brand,
    ItemInfo: ItemInfo,
    Basket: Basket,
    BasketItem: BasketItem,
    Rating: Rating,
    Item: Item
};
