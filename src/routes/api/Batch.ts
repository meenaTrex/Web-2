import express, { Router } from 'express';
const route: Router = express.Router();
import { Batch } from '../../CourseManagementApp';
import { StudentBatch } from '../../CourseManagementApp';

route.get('/',(req,res)=>{
    Batch.findAll()
    .then((batches)=>{
        res.json(batches)
    })
   
})

route.post('/',(req,res)=>{
    Batch.create({
        Name:req.body.Name,
        courseId:req.body.courseId
    })
    .then((batch)=>{
        res.json(batch)
    })
    .catch((err)=>{
        console.log(err)
    })
})

export default route;