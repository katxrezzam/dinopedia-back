"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Article_1 = __importDefault(require("./Article"));
const Asset_1 = __importDefault(require("./Asset"));
const Dinosaur_1 = __importDefault(require("./Dinosaur"));
const Section_1 = __importDefault(require("./Section"));
//
Article_1.default.hasMany(Section_1.default, { foreignKey: 'article_id' });
Section_1.default.belongsTo(Article_1.default, { foreignKey: 'article_id' });
//
Section_1.default.hasMany(Asset_1.default, { foreignKey: 'section_id' });
Asset_1.default.belongsTo(Section_1.default, { foreignKey: 'section_id' });
//
Dinosaur_1.default.belongsTo(Article_1.default, { foreignKey: 'article_id' });
Article_1.default.hasOne(Dinosaur_1.default, { foreignKey: 'article_id' });
