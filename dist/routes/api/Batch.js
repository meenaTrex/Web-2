"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
const CourseManagementApp_1 = require("../../CourseManagementApp");
route.get('/', (req, res) => {
    CourseManagementApp_1.Batch.findAll()
        .then((batches) => {
        res.json(batches);
    });
});
route.post('/', (req, res) => {
    CourseManagementApp_1.Batch.create({
        Name: req.body.Name,
        courseId: req.body.courseId
    })
        .then((batch) => {
        res.json(batch);
    })
        .catch((err) => {
        console.log(err);
    });
});
exports.default = route;
