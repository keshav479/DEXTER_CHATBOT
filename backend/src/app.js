"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var morgan_1 = require("morgan");
var index_js_1 = require("./routes/index.js");
(0, dotenv_1.config)();
var app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
//remove it in production

app.use("/api/v1", index_js_1.default);
exports.default = app;
