import express, { Router } from 'express';
const route: Router = express.Router();
import { Subject } from '../../CourseManagementApp';
import { Teacher } from '../../CourseManagementApp';
route.get('/',(req,res)=>{
    Subject.findAll()
    .then((subjects)=>{
        res.json(subjects);
    })
})

route.get('/:id',(req,res)=>{
    Subject.find({
        where:{
            id : req.params.id
        }
    })
    .then((subject)=>{
        res.json(subject);
    })
})

route.get('/:id/teachers',(req,res)=>{
    Teacher.findAll({
        where:{
            subjectId : req.params.id
        }
    })
    .then((teachers)=>{
        res.json(teachers);
    })
})

route.post('/',(req,res)=>{
    Subject.create({
        Name:req.body.Name,
        courseId:req.body.courseId
    })
    .then((subjects)=>{
        res.json(subjects)
    })
    .catch((err)=>{
        console.log(err);
    })
})

export default route;