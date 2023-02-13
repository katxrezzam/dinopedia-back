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
exports.update = exports.destroy = exports.create = exports.findById = exports.findAll = exports.findBySection = void 0;
const Asset_1 = __importDefault(require("../models/Asset"));
const findBySection = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const assets = yield Asset_1.default.findAll({ where: { section_id: id } });
    if (!assets) {
        throw new Error(`Not assets found for this section ${id}`);
    }
    return assets;
});
exports.findBySection = findBySection;
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Asset_1.default.findAll();
});
exports.findAll = findAll;
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const asset = yield Asset_1.default.findByPk(id);
    if (!asset)
        throw new Error('asset not found');
    return asset;
});
exports.findById = findById;
const create = (asset) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Asset_1.default.create(asset);
});
exports.create = create;
const destroy = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedAsset = yield Asset_1.default.destroy({ where: { id } });
    return !!deletedAsset;
});
exports.destroy = destroy;
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const asset = yield Asset_1.default.findByPk(id);
    if (!asset)
        throw new Error(`Not found Asset with ID ${id}`);
    return yield asset.update(payload);
});
exports.update = update;
