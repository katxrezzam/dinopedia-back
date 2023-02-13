"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../db/config");
class Article extends sequelize_1.Model {
}
Article.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, { sequelize: config_1.connectionDB, tableName: 'articles' });
exports.default = Article;
