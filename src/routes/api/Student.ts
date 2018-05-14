import express, { Router } from 'express';
const route: Router = express.Router();

import { Student } from '../../CourseManagementApp';
import { StudentBatch } from '../../CourseManagementApp';
import { Batch } from '../../CourseManagementApp';

route.get('/',(req,res)=>{
    Student.findAll()
    .then((students)=>{
        res.json(students)
    })
})

route.get('/:id',(req,res)=>{
    Student.find({
        where:{
            id:req.params.id
        }
    })
    .then((student)=>{
        res.json(student)
    })
})

route.get('/:id/batches',(req,res)=>{
    let ids:number[]=[];
    StudentBatch.findAll({
        where:{
            studentId:req.params.id
        }
    })
    .then((studentBatches:any)=>{
            studentBatches.forEach(element => {
                ids.push(element.batchId)
            });
            Batch.findAll({
                where:{
                    id:ids
                }
            })
            .then((batches)=>{
                if(batches.length!==0){
                    res.json(batches);
                }
                else{
                    res.json("Sorry!! no batches of given student")
                }
            })
        })
})

route.post('/',(req,res)=>{
    Student.create({
        Name:req.body.Name
    })
    .then((student)=>{
        res.json(student)
    })
})

route.delete('/:id',(req,res)=>{
    Student.destroy({
         where:{
            id:req.params.id
        }
    })
    .then((response)=>{
        res.json("Student Deleted succesfully")
    })
    .catch((response)=>{
        res.json("Error deleting Student,Try Again!!!")
    })
})
export default route;