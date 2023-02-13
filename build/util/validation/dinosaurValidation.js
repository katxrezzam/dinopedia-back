"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewUpdateDinosaur = exports.toNewDinosaur = void 0;
const enums_1 = require("../../enums");
const _validation_1 = require("./_validation");
const isKind = (kind) => {
    return Object.values(enums_1.Kind).includes(kind);
};
const isEra = (era) => {
    return Object.values(enums_1.Era).includes(era);
};
const isDiet = (diet) => {
    return Object.values(enums_1.Diet).includes(diet);
};
const eraValidation = (eraFromRequest) => {
    if (!(0, _validation_1.isString)(eraFromRequest) || !isEra(eraFromRequest)) {
        throw new Error('Incorrect or missing Era value');
    }
    return eraFromRequest;
};
const kindValidation = (kindFromRequest) => {
    if (!(0, _validation_1.isString)(kindFromRequest) || !isKind(kindFromRequest)) {
        throw new Error('Incorrect or missing Kind value');
    }
    return kindFromRequest;
};
const dietValidation = (dietFromRequest) => {
    if (!(0, _validation_1.isString)(dietFromRequest) || !isDiet(dietFromRequest)) {
        throw new Error('Error or missing Diet value');
    }
    return dietFromRequest;
};
const toNewDinosaur = (object) => {
    const newDinosaur = {
        name: (0, _validation_1.stringValidation)(object.name),
        kind: kindValidation(object.kind),
        location: (0, _validation_1.stringValidation)(object.location),
        era: eraValidation(object.era),
        diet: dietValidation(object.diet),
        url_image: (0, _validation_1.stringValidation)(object.url_image),
        article_id: (0, _validation_1.numberValidation)(object.id)
    };
    return newDinosaur;
};
exports.toNewDinosaur = toNewDinosaur;
const toNewUpdateDinosaur = (object) => {
    for (let obj of object) {
        console.log(obj);
    }
};
exports.toNewUpdateDinosaur = toNewUpdateDinosaur;
