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
const CourseManagementApp_4 = require("../../CourseManagementApp");
const CourseManagementApp_5 = require("../../CourseManagementApp");
const CourseManagementApp_6 = require("../../CourseManagementApp");
route.get('/', (req, res) => {
    CourseManagementApp_1.Course.findAll()
        .then((courses) => {
        res.json(courses);
    });
});
route.get('/:id', (req, res) => {
    CourseManagementApp_1.Course.find({
        where: {
            id: req.params.id
        }
    })
        .then((course) => {
        res.json(course);
    });
});
route.get('/:id/batches', (req, res) => {
    CourseManagementApp_2.Batch.findAll({
        where: {
            courseId: req.params.id
        }
    })
        .then((batches) => {
        if (batches.length !== 0) {
            res.json(batches);
        }
        else {
            res.json("Sorry!! No batches related to this course");
        }
    });
});
route.get('/:id1/batches/:id2', (req, res) => {
    CourseManagementApp_2.Batch.findAll({
        where: {
            courseId: req.params.id1,
            id: req.params.id2
        }
    })
        .then((batch) => {
        if (batch.length !== 0) {
            res.json(batch);
        }
        else {
            res.json("Sorry!! No batch related to this course");
        }
    });
});
route.get('/:id1/batches/:id2/lectures', (req, res) => {
    CourseManagementApp_2.Batch.findAll({
        where: {
            courseId: req.params.id1,
            id: req.params.id2
        }
    })
        .then((batches) => {
        CourseManagementApp_3.Lecture.findAll({
            where: {
                batchId: req.params.id2
            }
        })
            .then((lectures) => {
            if (lectures.length !== 0) {
                res.json(lectures);
            }
            else {
                res.json("Sorry!! No lectures of given batch of given course");
            }
        })
            .catch((err) => {
            console.log(err);
        });
    })
        .catch((err) => {
        console.log(err);
    });
});
route.get('/:id1/batches/:id2/lectures/:id3', (req, res) => {
    CourseManagementApp_2.Batch.findAll({
        where: {
            courseId: req.params.id1,
            id: req.params.id2
        }
    })
        .then((batches) => {
        CourseManagementApp_3.Lecture.findAll({
            where: {
                id: req.params.id3,
                batchId: req.params.id2
            }
        })
            .then((lectures) => {
            if (lectures.length !== 0) {
                res.json(lectures);
            }
            else {
                res.json("Sorry!! No lecture of given batch of given course");
            }
        })
            .catch((err) => {
            console.log(err);
        });
    })
        .catch((err) => {
        console.log(err);
    });
});
route.get('/:id1/batches/:id2/students', (req, res) => {
    CourseManagementApp_2.Batch.findAll({
        where: {
            courseId: req.params.id1,
            id: req.params.id2
        }
    })
        .then((batches) => {
        CourseManagementApp_4.StudentBatch.findAll({
            where: {
                batchId: req.params.id2
            }
        })
            .then((studentBatches) => {
            let studentIds = [];
            // console.log(studentBatches);
            // studentBatches.forEach(element => {
            //      Student.findAll({
            //             where:{
            //                     id:element.studentId
            //                 }
            //         }).then((student)=>{
            //             // console.log(student);
            //             for(var i=0;i<student.length;i++){
            //                 // console.log(student[i]);
            //                 studentArray.push(student[i]);
            //                 console.log(studentArray);
            //             }
            //         })
            //             .catch((err)=>{
            //                 console.log(err);
            //             })
            //     })
            studentBatches.forEach(element => {
                studentIds.push(element.studentId);
            });
            CourseManagementApp_5.Student.findAll({
                where: {
                    id: studentIds
                }
            })
                .then((students) => {
                res.json(students);
            })
                .catch((err) => {
                console.log(err);
            });
        });
    });
});
route.get('/:id/batches/:batchId/teachers', (req, res) => {
    CourseManagementApp_3.Lecture.findAll({
        where: {
            batchId: req.params.batchId
        },
        include: [{
                model: CourseManagementApp_6.Teacher,
                as: 'teacher'
            }]
    })
        .then((lectures) => {
        var teachers = [];
        lectures.forEach(element => {
            teachers.push(element.teacher);
        });
        res.json(teachers);
    })
        .catch((err) => {
        console.log(err);
    });
});
route.post('/', (req, res) => {
    CourseManagementApp_1.Course.create({
        Name: req.body.Name
    })
        .then((course) => {
        res.json(course);
    })
        .catch((err) => {
        console.log(err);
    });
});
route.delete('/:id', (req, res) => {
    CourseManagementApp_1.Course.destroy({
        where: {
            id: req.params.id
        }
    })
        .then((response) => {
        res.json("Course Deleted succesfully");
    })
        .catch((response) => {
        res.json("Error deleting Course,Try Again!!!");
    });
});
exports.default = route;
