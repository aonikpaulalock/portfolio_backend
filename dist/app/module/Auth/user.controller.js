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
exports.UserControllers = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const http_status_1 = __importDefault(require("http-status"));
const ResponseSend_1 = require("../../../utils/ResponseSend");
const CatchAsyncPromise_1 = require("../../middleware/CatchAsyncPromise");
const user_service_1 = require("./user.service");
const createUser = (0, CatchAsyncPromise_1.CatchAsyncPromise)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserServices.createUserIntoDB(req.body);
    (0, ResponseSend_1.ResponseSend)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "User registered successfully",
        data: result
    });
}));
const loginUser = (0, CatchAsyncPromise_1.CatchAsyncPromise)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserServices.loginUserIntoDB(req.body);
    (0, ResponseSend_1.ResponseSend)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "User login successful",
        data: result
    });
}));
// const changePassword = CatchAsyncPromise(
//   async (req, res, next) => {
//     const userId = req.userPayload._id
//     const result = await UserServices.changePasswordIntoDB(userId, req.body)
//     ResponseSend(res, {
//       success: true,
//       statusCode: httpStatus.OK,
//       message: "Password changed successfully",
//       data: result
//     })
//   }
// )
const getAllUser = (0, CatchAsyncPromise_1.CatchAsyncPromise)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserServices.getAllUserIntoDB();
    res.status(200).json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Users retrieved successfully",
        data: result,
    });
}));
exports.UserControllers = {
    createUser,
    loginUser,
    getAllUser,
    // changePassword
};
