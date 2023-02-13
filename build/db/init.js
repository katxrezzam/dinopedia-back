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
exports.initDB = void 0;
const errorLogger_1 = require("../util/errorLogger");
const config_1 = require("./config");
const initDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield config_1.connectionDB.authenticate();
        yield config_1.connectionDB.sync();
    }
    catch (error) {
        console.error((0, errorLogger_1.errorMessage)(error));
    }
});
exports.initDB = initDB;