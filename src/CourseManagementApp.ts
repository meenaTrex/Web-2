import Sequelize from 'sequelize'

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './courseManagement.db',
})

export const Course=db.define('courses',{
    Name:{
        type:Sequelize.STRING(40),
        allowNull:false
    },
})

export const Batch=db.define('batches',{
    Name:{
        type:Sequelize.STRING(40),
        allowNull:false
    },
})

export const Teacher=db.define('teachers',{
    Name:{
        type:Sequelize.STRING(40),
        allowNull:false
    },
})

export const Subject=db.define('subjects',{
    Name:{
        type:Sequelize.STRING(40),
        allowNull:false
    },
})

export const Lecture=db.define('lectures',{
    Name:{
        type:Sequelize.STRING(40),
        allowNull:false
    },
})

export const Student=db.define('students',{
    Name:{
        type:Sequelize.STRING(40),
        allowNull:false
    },
})

export const StudentBatch=db.define('studentbatch',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    }
})

db.sync()
    .then(() => {
        console.log("Database has been Created");
    })

Batch.belongsTo(Course);
Subject.belongsTo(Course);
Teacher.belongsTo(Subject);
Lecture.belongsTo(Batch);
Lecture.belongsTo(Teacher);
Student.belongsToMany(Batch,{through: StudentBatch});
Batch.belongsToMany(Student,{through: StudentBatch});