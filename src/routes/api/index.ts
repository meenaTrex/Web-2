import express, { Router } from 'express';
const route: Router = express.Router();

import batchRoute from './Batch';
import courseRoute from './Course';
import lectureRoute from './Lecture';
import studentRoute from './Student';
import subjectRoute from './Subject';
import teacherRoute from './Teacher';
import studentbatchRoute from './StudentBatch';

const routes = {
    batches: batchRoute,
    courses: courseRoute,
    lectures: lectureRoute,
    students: studentRoute,
    subjects: subjectRoute,
    teachers: teacherRoute,
    studentbatch : studentbatchRoute
}

route.use('/batches', routes.batches)
route.use('/courses', routes.courses)
route.use('/lectures', routes.lectures)
route.use('/students', routes.students)
route.use('/subjects', routes.subjects)
route.use('/teachers', routes.teachers)
route.use('/stbatches',routes.studentbatch)

export default route;