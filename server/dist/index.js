"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = require("mongoose");
const express_1 = __importDefault(require("express"));
const movies_1 = __importDefault(require("./routes/movies"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const URL = process.env.CONNECTION_URL || "";
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use('/movies', movies_1.default);
(0, mongoose_1.connect)(URL, (err) => {
    if (err)
        console.log(err);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
//# sourceMappingURL=index.js.map