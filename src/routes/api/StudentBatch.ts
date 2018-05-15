import express, { Router } from 'express';
const route: Router = express.Router();
import { StudentBatch } from '../../CourseManagementApp';

route.get('/',(req,res)=>{
    StudentBatch.findAll()
    .then((students)=>{
        res.json(students)
    })
})

route.post('/',(req,res)=>{
    StudentBatch.create({
        batchId:req.body.batchId,
        studentId:req.body.studentId
    })
    .then((stbatches)=>{
        res.json(stbatches)
    })
    .catch((err)=>{
        console.log(err)
    })
})

export default route;