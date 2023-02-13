"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = require("dotenv");
require("./models/_validation");
const root_1 = __importDefault(require("./routes/root"));
const dinosaurRouter_1 = __importDefault(require("./routes/dinosaurRouter"));
const corsOption_1 = require("./lib/cors/corsOption");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const APIPATH = '/api';
//MIDDLEWARE
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOption_1.corsOptions));
app.use(express_1.default.urlencoded({ extended: false }));
//ROUTES
app.use('/', root_1.default);
app.use(`${APIPATH}/dinosaurs`, dinosaurRouter_1.default);
//
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path_1.default.join(__dirname, 'views', '404.html'));
    }
    else if (req.accepts('json')) {
        res.json({ 'error': '404 not found' });
    }
    else {
        res.type('text').send('404 not found');
    }
});
//DB
app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
