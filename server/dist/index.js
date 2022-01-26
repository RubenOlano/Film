"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: { type: String, required: true },
    actors: { type: [String], required: true },
    poster: { type: String, required: true },
});
//# sourceMappingURL=index.js.map