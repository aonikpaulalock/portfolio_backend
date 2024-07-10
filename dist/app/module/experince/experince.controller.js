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
exports.ExperinceControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ResponseSend_1 = require("../../../utils/ResponseSend");
const CatchAsyncPromise_1 = require("../../middleware/CatchAsyncPromise");
const experince_service_1 = require("./experince.service");
const createExperinceFromDB = (0, CatchAsyncPromise_1.CatchAsyncPromise)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experince_service_1.ExperinceServices.createExperinceIntoDB(req.body);
    (0, ResponseSend_1.ResponseSend)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Experince create successful!",
        data: result
    });
}));
const getAllExperinceFromDB = (0, CatchAsyncPromise_1.CatchAsyncPromise)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experince_service_1.ExperinceServices.getAllExperinceIntoDB();
    res.status(200).json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Experince retrieved successfully!",
        data: result,
    });
}));
exports.ExperinceControllers = {
    createExperinceFromDB,
    getAllExperinceFromDB
};
