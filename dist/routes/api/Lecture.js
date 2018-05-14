"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
const CourseManagementApp_1 = require("../../CourseManagementApp");
route.get('/', (req, res) => {
    CourseManagementApp_1.Lecture.findAll()
        .then((lectures) => {
        res.json(lectures);
    });
});
route.post('/', (req, res) => {
    CourseManagementApp_1.Lecture.create({
        Name: req.body.Name,
        batchId: req.body.batchId,
        teacherId: req.body.teacherId
    })
        .then((lecture) => {
        res.json(lecture);
    })
        .catch((err) => {
        console.log(err);
    });
});
exports.default = route;
