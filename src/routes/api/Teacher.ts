import express, { Router } from 'express';
const route: Router = express.Router();
import { Teacher } from '../../CourseManagementApp';
import { Subject } from '../../CourseManagementApp';
import { Lecture } from '../../CourseManagementApp';
import { Batch } from '../../CourseManagementApp';

route.get('/',(req,res)=>{
    Teacher.findAll()
    .then((teachers)=>{
        res.json(teachers)
    })
})

route.get('/:id',(req,res)=>{
    Teacher.find({
        where:{
            id : req.params.id
        }
    })
    .then((teacher)=>{
        res.json(teacher);
    })
})

route.get('/:id/batches',(req,res)=>{
    Teacher.find({
        where:{
            id : req.params.id
        }
    })
    .then((teacher:any)=>{
        Subject.find({
            where:{
                id:teacher.subjectId
            }
        })
        .then((subjects:any)=>{
            Batch.findAll({
                where:{
                    courseId:subjects.courseId
                }
            })
            .then((batches)=>{
                if(batches.length!==0){
                    res.json(batches);
                }
                else{
                    res.json("Sorry No batches of given teacher")
                }
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})

route.post('/',(req,res)=>{
    Teacher.create({
        Name:req.body.Name,
        subjectId:req.body.subjectId
    })
    .then((teacher)=>{
        res.json(teacher)
    })
    .catch((err)=>{
        console.log(err);
    })
})

export default route;