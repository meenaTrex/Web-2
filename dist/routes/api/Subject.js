"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
const CourseManagementApp_1 = require("../../CourseManagementApp");
const CourseManagementApp_2 = require("../../CourseManagementApp");
route.get('/', (req, res) => {
    CourseManagementApp_1.Subject.findAll()
        .then((subjects) => {
        res.json(subjects);
    });
});
route.get('/:id', (req, res) => {
    CourseManagementApp_1.Subject.find({
        where: {
            id: req.params.id
        }
    })
        .then((subject) => {
        res.json(subject);
    });
});
route.get('/:id/teachers', (req, res) => {
    CourseManagementApp_2.Teacher.findAll({
        where: {
            subjectId: req.params.id
        }
    })
        .then((teachers) => {
        res.json(teachers);
    });
});
route.post('/', (req, res) => {
    CourseManagementApp_1.Subject.create({
        Name: req.body.Name,
        courseId: req.body.courseId
    })
        .then((subjects) => {
        res.json(subjects);
    })
        .catch((err) => {
        console.log(err);
    });
});
exports.default = route;
