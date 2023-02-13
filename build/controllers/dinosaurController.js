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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDinosaur = exports.findDinosaurById = exports.createDinosaur = exports.findAllDinosaur = void 0;
const dinosaurServices_1 = require("../services/dinosaurServices");
const errorLogger_1 = require("../util/errorLogger");
const dinosaurValidation_1 = require("../util/validation/dinosaurValidation");
const _validation_1 = require("../util/validation/_validation");
const findAllDinosaur = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dinos = yield (0, dinosaurServices_1.findAll)();
        res.json(dinos);
    }
    catch (error) {
        res.sendStatus(400);
        console.error((0, errorLogger_1.errorMessage)(error));
    }
});
exports.findAllDinosaur = findAllDinosaur;
const createDinosaur = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newDino = (0, dinosaurValidation_1.toNewDinosaur)(req.body);
        const parsedDino = yield (0, dinosaurServices_1.create)(newDino);
        res.json(parsedDino);
    }
    catch (error) {
        res.sendStatus(400);
        console.error((0, errorLogger_1.errorMessage)(error));
    }
});
exports.createDinosaur = createDinosaur;
const findDinosaurById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, _validation_1.numberValidation)(+req.params.id);
        const dino = yield (0, dinosaurServices_1.findById)(id);
        res.json(dino);
    }
    catch (error) {
        res.sendStatus(400);
        console.error((0, errorLogger_1.errorMessage)(error));
    }
});
exports.findDinosaurById = findDinosaurById;
const updateDinosaur = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, dinosaurValidation_1.toNewUpdateDinosaur)(req.body);
        res.json(req.body);
    }
    catch (error) {
        res.sendStatus(400);
    }
});
exports.updateDinosaur = updateDinosaur;
