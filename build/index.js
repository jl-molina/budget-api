"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const routes_1 = __importDefault(require("./routes"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.get('/ping', (_req, res) => {
    res.send('pong');
});
app.use(express_1.default.json());
(0, routes_1.default)(app);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
