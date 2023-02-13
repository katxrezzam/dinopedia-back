"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionDB = void 0;
const dotenv_1 = require("dotenv");
const sequelize_1 = __importDefault(require("sequelize/types/sequelize"));
(0, dotenv_1.config)();
const db = {
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    driver: process.env.DRIVER
};
exports.connectionDB = new sequelize_1.default(db.database, db.user, db.password, {
    host: db.host,
    dialect: db.driver
});
