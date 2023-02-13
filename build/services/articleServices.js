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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.update = exports.destroy = exports.create = exports.findAll = void 0;
const Article_1 = __importDefault(require("../models/Article"));
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Article_1.default.findAll();
});
exports.findAll = findAll;
const create = (article) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Article_1.default.create(article);
});
exports.create = create;
const destroy = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedArticle = yield Article_1.default.destroy({ where: { id } });
    return !!deletedArticle;
});
exports.destroy = destroy;
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const article = yield Article_1.default.findByPk(id);
    if (!article) {
        throw new Error(`Not found an Article with id: ${id}`);
    }
    return yield article.update(payload);
});
exports.update = update;
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const article = yield Article_1.default.findByPk(id);
    if (!article) {
        throw new Error(`Not found an Article with id: ${id}`);
    }
    return article;
});
exports.findById = findById;
