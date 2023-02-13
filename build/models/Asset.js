"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../db/config");
class Asset extends sequelize_1.Model {
}
Asset.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, { sequelize: config_1.connectionDB, tableName: 'assets' });
exports.default = Asset;
