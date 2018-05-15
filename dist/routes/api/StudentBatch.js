"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
const CourseManagementApp_1 = require("../../CourseManagementApp");
route.get('/', (req, res) => {
    CourseManagementApp_1.StudentBatch.findAll()
        .then((students) => {
        res.json(students);
    });
});
route.post('/', (req, res) => {
    CourseManagementApp_1.StudentBatch.create({
        batchId: req.body.batchId,
        studentId: req.body.studentId
    })
        .then((stbatches) => {
        res.json(stbatches);
    })
        .catch((err) => {
        console.log(err);
    });
});
exports.default = route;
