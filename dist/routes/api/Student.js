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
    CourseManagementApp_1.Student.findAll()
        .then((students) => {
        res.json(students);
    });
});
route.get('/:id', (req, res) => {
    CourseManagementApp_1.Student.find({
        where: {
            id: req.params.id
        }
    })
        .then((student) => {
        res.json(student);
    });
});
route.get('/:id/batches', (req, res) => {
    let ids = [];
    CourseManagementApp_2.StudentBatch.findAll({
        where: {
            studentId: req.params.id
        }
    })
        .then((studentBatches) => {
        studentBatches.forEach(element => {
            ids.push(element.batchId);
        });
        CourseManagementApp_3.Batch.findAll({
            where: {
                id: ids
            }
        })
            .then((batches) => {
            if (batches.length !== 0) {
                res.json(batches);
            }
            else {
                res.json("Sorry!! no batches of given student");
            }
        });
    });
});
route.post('/', (req, res) => {
    CourseManagementApp_1.Student.create({
        Name: req.body.Name
    })
        .then((student) => {
        res.json(student);
    });
});
route.delete('/:id', (req, res) => {
    CourseManagementApp_1.Student.destroy({
        where: {
            id: req.params.id
        }
    })
        .then((response) => {
        res.json("Student Deleted succesfully");
    })
        .catch((response) => {
        res.json("Error deleting Student,Try Again!!!");
    });
});
exports.default = route;
