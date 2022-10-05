"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const api_router_1 = __importDefault(require("./router/api-router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// app.use(cors);
// app.use(express.json);
app.use('/api', api_router_1.default);
app.all('*' /*error functions */);
app.get('/', (req, res) => {
    res.send('Hello there hi!');
});
exports.default = app;
