"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: { type: String, required: true },
    actors: { type: [String], required: true },
    poster: { type: String, required: true },
});
const MovieModel = (0, mongoose_1.model)("Movie", schema);
const run = async () => {
};
run();
//# sourceMappingURL=index.js.map