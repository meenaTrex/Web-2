"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const db = new sequelize_1.default({
    dialect: 'sqlite',
    storage: './courseManagement.db',
});
exports.Course = db.define('courses', {
    Name: {
        type: sequelize_1.default.STRING(40),
        allowNull: false
    },
});
exports.Batch = db.define('batches', {
    Name: {
        type: sequelize_1.default.STRING(40),
        allowNull: false
    },
});
exports.Teacher = db.define('teachers', {
    Name: {
        type: sequelize_1.default.STRING(40),
        allowNull: false
    },
});
exports.Subject = db.define('subjects', {
    Name: {
        type: sequelize_1.default.STRING(40),
        allowNull: false
    },
});
exports.Lecture = db.define('lectures', {
    Name: {
        type: sequelize_1.default.STRING(40),
        allowNull: false
    },
});
exports.Student = db.define('students', {
    Name: {
        type: sequelize_1.default.STRING(40),
        allowNull: false
    },
});
exports.StudentBatch = db.define('studentbatch', {
    id: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
});
db.sync()
    .then(() => {
    console.log("Database has been Created");
});
exports.Batch.belongsTo(exports.Course);
exports.Subject.belongsTo(exports.Course);
exports.Teacher.belongsTo(exports.Subject);
exports.Lecture.belongsTo(exports.Batch);
exports.Lecture.belongsTo(exports.Teacher);
exports.Student.belongsToMany(exports.Batch, { through: exports.StudentBatch });
exports.Batch.belongsToMany(exports.Student, { through: exports.StudentBatch });
