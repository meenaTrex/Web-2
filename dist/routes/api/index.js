"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
const Batch_1 = __importDefault(require("./Batch"));
const Course_1 = __importDefault(require("./Course"));
const Lecture_1 = __importDefault(require("./Lecture"));
const Student_1 = __importDefault(require("./Student"));
const Subject_1 = __importDefault(require("./Subject"));
const Teacher_1 = __importDefault(require("./Teacher"));
const routes = {
    batches: Batch_1.default,
    courses: Course_1.default,
    lectures: Lecture_1.default,
    students: Student_1.default,
    subjects: Subject_1.default,
    teachers: Teacher_1.default
};
route.use('/batches', routes.batches);
route.use('/courses', routes.courses);
route.use('/lectures', routes.lectures);
route.use('/students', routes.students);
route.use('/subjects', routes.subjects);
route.use('/teachers', routes.teachers);
exports.default = route;
