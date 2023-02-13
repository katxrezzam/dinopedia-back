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
exports.create = exports.update = exports.destroy = exports.findById = exports.findAll = void 0;
const Dinosaur_1 = __importDefault(require("../models/Dinosaur"));
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Dinosaur_1.default.findAll();
});
exports.findAll = findAll;
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const dinosaur = yield Dinosaur_1.default.findByPk(id);
    if (!dinosaur)
        throw new Error('dinosaur not found');
    return dinosaur;
});
exports.findById = findById;
const destroy = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedDinosaur = yield Dinosaur_1.default.destroy({ where: { id } });
    return !!deletedDinosaur;
});
exports.destroy = destroy;
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const dinosaur = yield Dinosaur_1.default.findByPk(id);
    if (!dinosaur)
        throw new Error('dinosaur not found');
    return dinosaur.update(payload);
});
exports.update = update;
const create = (dino) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Dinosaur_1.default.create(dino);
});
exports.create = create;
