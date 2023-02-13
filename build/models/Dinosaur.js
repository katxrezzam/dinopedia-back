"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../db/config");
class Dinosaur extends sequelize_1.Model {
}
Dinosaur.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    kind: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    era: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    diet: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    url_image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, { sequelize: config_1.connectionDB, tableName: 'dinosaurs' });
exports.default = Dinosaur;
