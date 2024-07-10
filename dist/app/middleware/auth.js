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
exports.auth = void 0;
const CatchAsyncPromise_1 = require("./CatchAsyncPromise");
const AppError_1 = __importDefault(require("../../utils/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../config"));
const user_utils_1 = require("../module/Auth/user.utils");
const user_model_1 = require("../module/Auth/user.model");
const auth = (...userRole) => {
    return (0, CatchAsyncPromise_1.CatchAsyncPromise)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        //! If user not send token
        if (!token) {
            throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "You can't unauthorize access");
        }
        const decoded = (0, user_utils_1.verifyToken)(token, config_1.default.jwt_access_token);
        const { _id } = decoded;
        // //! If User Exists in database
        const user = yield user_model_1.User.findById(_id);
        if (!user) {
            throw new AppError_1.default(http_status_1.default.NOT_FOUND, "User not found");
        }
        //! checking user access
        if (userRole && !userRole.includes(user === null || user === void 0 ? void 0 : user.role)) {
            throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "Unauthorize access for this role");
        }
        //!set to request
        req.userPayload = decoded;
        next();
    }));
};
exports.auth = auth;
