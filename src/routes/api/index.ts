import express, { Router } from 'express';
const route: Router = express.Router();

import batchRoute from './Batch';
import courseRoute from './Course';
import lectureRoute from './Lecture';
import studentRoute from './Student';
import subjectRoute from './Subject';
import teacherRoute from './Teacher';

const routes = {
    batches: batchRoute,
    courses: courseRoute,
    lectures: lectureRoute,
    students: studentRoute,
    subjects: subjectRoute,
    teachers: teacherRoute
}

route.use('/batches', routes.batches)
route.use('/courses', routes.courses)
route.use('/lectures', routes.lectures)
route.use('/students', routes.students)
route.use('/subjects', routes.subjects)
route.use('/teachers', routes.teachers)

export default route;