"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
const CourseManagementApp_1 = require("../../CourseManagementApp");
const CourseManagementApp_2 = require("../../CourseManagementApp");
const CourseManagementApp_3 = require("../../CourseManagementApp");
route.get('/', (req, res) => {
    CourseManagementApp_1.Teacher.findAll()
        .then((teachers) => {
        res.json(teachers);
    });
});
route.get('/:id', (req, res) => {
    CourseManagementApp_1.Teacher.find({
        where: {
            id: req.params.id
        }
    })
        .then((teacher) => {
        res.json(teacher);
    });
});
route.get('/:id/batches', (req, res) => {
    CourseManagementApp_1.Teacher.find({
        where: {
            id: req.params.id
        }
    })
        .then((teacher) => {
        CourseManagementApp_2.Subject.find({
            where: {
                id: teacher.subjectId
            }
        })
            .then((subjects) => {
            CourseManagementApp_3.Batch.findAll({
                where: {
                    courseId: subjects.courseId
                }
            })
                .then((batches) => {
                if (batches.length !== 0) {
                    res.json(batches);
                }
                else {
                    res.json("Sorry No batches of given teacher");
                }
            });
        })
            .catch((err) => {
            console.log(err);
        });
    })
        .catch((err) => {
        console.log(err);
    });
});
route.post('/', (req, res) => {
    CourseManagementApp_1.Teacher.create({
        Name: req.body.Name,
        subjectId: req.body.subjectId
    })
        .then((teacher) => {
        res.json(teacher);
    })
        .catch((err) => {
        console.log(err);
    });
});
exports.default = route;
