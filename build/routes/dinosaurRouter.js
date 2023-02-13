"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dinosaurController_1 = require("../controllers/dinosaurController");
const routerDinosaur = (0, express_1.Router)();
routerDinosaur.route('/')
    .get(dinosaurController_1.findAllDinosaur)
    .post(dinosaurController_1.createDinosaur);
routerDinosaur.route('/:id')
    .put(dinosaurController_1.updateDinosaur)
    .get(dinosaurController_1.findDinosaurById);
exports.default = routerDinosaur;
