"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberValidation = exports.stringValidation = exports.isNumber = exports.isString = void 0;
/**
 * A function it validates if entry is a string
 * @param {any} string - Any "string" value
 * @return {boolean} Returns true if typeof or instanceof is string, otherwise returns false
 */
const isString = (string) => typeof string === 'string' || string instanceof String;
exports.isString = isString;
/**
 * A function it validates if entry is a number
 * @param {any} number - Any "number" value
 * @return {boolean} Returns true if typeof is number and is greater than 0 , otherwise returns false
 */
const isNumber = (number) => typeof number === 'number' && number > 0;
exports.isNumber = isNumber;
/**
 *
 * @param stringFromRequest
 * @return string
 */
const stringValidation = (stringFromRequest) => {
    if (!(0, exports.isString)(stringFromRequest)) {
        throw new Error('Incorrect or missing string value');
    }
    return stringFromRequest;
};
exports.stringValidation = stringValidation;
/**
 *
 * @param numberFromRequest
 */
const numberValidation = (numberFromRequest) => {
    if (!(0, exports.isNumber)(numberFromRequest)) {
        throw new Error('Incorrect or missing number value');
    }
    return numberFromRequest;
};
exports.numberValidation = numberValidation;
