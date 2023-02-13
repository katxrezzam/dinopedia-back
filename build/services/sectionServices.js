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
exports.destroy = exports.update = exports.create = exports.findById = exports.findAll = exports.findByArticle = void 0;
const Section_1 = __importDefault(require("../models/Section"));
const findByArticle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    /**
     *  A function it returns all sections associated with an article, otherwise it throws an error if it doesn't find any result
     *  @param {number} id - The article's id associated to its section
     *  @return {Promise<SectionOutput[]>} The collection of sections filter by Article
     */
    const sections = yield Section_1.default.findAll({ where: { article_id: id } });
    if (!sections)
        throw new Error('No section found for this article');
    return sections;
});
exports.findByArticle = findByArticle;
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Section_1.default.findAll();
});
exports.findAll = findAll;
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const section = yield Section_1.default.findByPk(id);
    if (!section)
        throw new Error('No section found');
    return section;
});
exports.findById = findById;
const create = (section) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Section_1.default.create(section);
});
exports.create = create;
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const section = yield Section_1.default.findByPk(id);
    if (!section)
        throw new Error('No section found');
    return section.update(payload);
});
exports.update = update;
const destroy = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedSection = yield Section_1.default.destroy({ where: { id } });
    return !!deletedSection;
});
exports.destroy = destroy;
