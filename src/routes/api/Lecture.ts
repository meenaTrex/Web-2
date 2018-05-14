import express, { Router } from 'express';
const route: Router = express.Router();
import { Lecture } from '../../CourseManagementApp';

route.get('/',(req,res)=>{
    Lecture.findAll()
    .then((lectures)=>{
        res.json(lectures)
    })
})

route.post('/',(req,res)=>{
    Lecture.create({
        Name:req.body.Name,
        batchId:req.body.batchId,
        teacherId:req.body.teacherId
    })
    .then((lecture)=>{
        res.json(lecture)
    })
    .catch((err)=>{
        console.log(err)
    })
})
export default route;