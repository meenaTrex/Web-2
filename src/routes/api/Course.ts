import express, { Router } from 'express';
const route: Router = express.Router();
import { Course } from '../../CourseManagementApp';
import { Batch } from '../../CourseManagementApp';
import { Lecture } from '../../CourseManagementApp';
import { StudentBatch } from '../../CourseManagementApp';
import { Student } from '../../CourseManagementApp';
import { Teacher } from '../../CourseManagementApp';

route.get('/',(req,res)=>{
    Course.findAll()
    .then((courses)=>{
        res.json(courses);
    })
})

route.get('/:id',(req,res)=>{
    Course.find({
        where:{
            id : req.params.id
        }
    })
    .then((course)=>{
        res.json(course);
    })
})

route.get('/:id/batches',(req,res)=>{
    Batch.findAll({
        where:{
            courseId : req.params.id
        }
    })
    .then((batches)=>{
         if(batches.length!==0)  {
            res.json(batches)            
        }
        else{
            res.json("Sorry!! No batches related to this course")
        }
    })
})

route.get('/:id1/batches/:batchId',(req,res)=>{
    Batch.findAll({
        where:{
            courseId : req.params.id1,
            id: req.params.batchId
        }
    })
    .then((batch)=>{    
        if(batch.length!==0)  {
            res.json(batch)            
        }
        else{
            res.json("Sorry!! No batch related to this course")
        }
       
    })
})

route.get('/:id1/batches/:id2/lectures',(req,res)=>{
    Batch.findAll({
        where:{
            courseId : req.params.id1,
            id: req.params.id2
        }
    })
    .then((batches)=>{
        Lecture.findAll({
            where:{
                batchId:req.params.id2
            }
        })
        .then((lectures)=>{
            if(lectures.length!==0){
                res.json(lectures)
            }
            else{
                res.json("Sorry!! No lectures of given batch of given course")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})

route.get('/:id1/batches/:id2/lectures/:id3',(req,res)=>{
    Batch.findAll({
        where:{
            courseId : req.params.id1,
            id: req.params.id2
        }
    })
    .then((batches)=>{
        Lecture.findAll({
            where:{
                id:req.params.id3,
                batchId:req.params.id2
            }
        })
        .then((lectures)=>{
            if(lectures.length!==0){
                res.json(lectures)
            }
            else{
                res.json("Sorry!! No lecture of given batch of given course")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})

route.get('/:id1/batches/:id2/students',(req,res)=>{
    Batch.findAll({
        where:{
            courseId : req.params.id1,
            id: req.params.id2
        }
    })
    .then((batches)=>{
        StudentBatch.findAll({
            where:{
                batchId:req.params.id2
            }
        })
        .then((studentBatches:any)=>{
            let studentIds:Number[]=[];
            studentBatches.forEach(element => {
                studentIds.push(element.studentId)
            })
            Student.findAll({
                where:{
                    id:studentIds
                }
            })
            .then((students)=>{
                if(students.length!==0){
                    res.json(students);
                }
                else{
                    res.json("Sorry no such students of given batch of a course")
                }
            })
                .catch((err)=>{
                    console.log(err);
                })
        })
    })
})

route.get('/:id/batches/:batchId/teachers',(req,res)=>{
    Lecture.findAll({
        where:{
            batchId:req.params.batchId
        },
        include:[{
            model:Teacher,
            as:'teacher'
        }]
    })
    .then((lectures:any)=>{
        var teachers:object[]=[];
        lectures.forEach(element => {
        teachers.push(element.teacher)
    });
        res.json(teachers);
    })
        .catch((err)=>{
            console.log(err);
        }) 
})

route.post('/',(req,res)=>{
    Course.create({
        Name:req.body.Name
    })
    .then((course)=>{
        res.json(course)
    })
        .catch((err)=>{
        console.log(err);
    })
})

route.delete('/:id',(req,res)=>{
    Course.destroy({
        where:{
            id:req.params.id
        }
    })
    .then((response)=>{
        res.json("Course Deleted succesfully")
    })
    .catch((response)=>{
        res.json("Error deleting Course,Try Again!!!")
    })
})
export default route;