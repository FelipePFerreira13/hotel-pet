"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const common_1 = require("@nestjs/common");
const express_1 = __importDefault(require("express"));
const app_module_1 = require("../src/app.module");
const server = (0, express_1.default)();
let cachedApp = null;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server));
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
    }));
    await app.init();
}
async function handler(req, res) {
    if (!cachedApp) {
        cachedApp = bootstrap();
    }
    await cachedApp;
    server(req, res);
}
//# sourceMappingURL=index.js.map