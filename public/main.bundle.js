webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div align=\"center\" >\n    <nav style=\"background-color:aqua\">\n        <a [routerLink]=\"['/courses']\">Courses</a>\n        <a [routerLink]=\"['/students']\">Students</a>\n        <a [routerLink]=\"['/subjects']\">Subjects</a>\n        <a [routerLink]=\"['/teachers']\">Teachers</a>\n    </nav>\n</div>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__course_course_component__ = __webpack_require__("./src/app/course/course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__batch_batch_component__ = __webpack_require__("./src/app/batch/batch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__teacher_teacher_component__ = __webpack_require__("./src/app/teacher/teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__student_student_component__ = __webpack_require__("./src/app/student/student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lecture_lecture_component__ = __webpack_require__("./src/app/lecture/lecture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__subject_subject_component__ = __webpack_require__("./src/app/subject/subject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__course_service__ = __webpack_require__("./src/app/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__batch_service__ = __webpack_require__("./src/app/batch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__teacher_service__ = __webpack_require__("./src/app/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__student_service__ = __webpack_require__("./src/app/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lecture_service__ = __webpack_require__("./src/app/lecture.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__subject_service__ = __webpack_require__("./src/app/subject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__studentbatch_service__ = __webpack_require__("./src/app/studentbatch.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// import { AppRoutingModule } from './/app-routing.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__course_course_component__["a" /* CourseComponent */],
                __WEBPACK_IMPORTED_MODULE_6__batch_batch_component__["a" /* BatchComponent */],
                __WEBPACK_IMPORTED_MODULE_7__teacher_teacher_component__["a" /* TeacherComponent */],
                __WEBPACK_IMPORTED_MODULE_8__student_student_component__["a" /* StudentComponent */],
                __WEBPACK_IMPORTED_MODULE_9__lecture_lecture_component__["a" /* LectureComponent */],
                __WEBPACK_IMPORTED_MODULE_10__subject_subject_component__["a" /* SubjectComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    { path: "courses", component: __WEBPACK_IMPORTED_MODULE_5__course_course_component__["a" /* CourseComponent */] },
                    { path: "students", component: __WEBPACK_IMPORTED_MODULE_8__student_student_component__["a" /* StudentComponent */] },
                    { path: "subjects", component: __WEBPACK_IMPORTED_MODULE_10__subject_subject_component__["a" /* SubjectComponent */] },
                    { path: "teachers", component: __WEBPACK_IMPORTED_MODULE_7__teacher_teacher_component__["a" /* TeacherComponent */] },
                    { path: "batches", component: __WEBPACK_IMPORTED_MODULE_6__batch_batch_component__["a" /* BatchComponent */] },
                    { path: "main", component: __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */] },
                    { path: " ", redirectTo: "main", pathMatch: "full" },
                    { path: "**", redirectTo: "main", pathMatch: "full" }
                ]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__course_service__["a" /* CourseService */],
                __WEBPACK_IMPORTED_MODULE_12__batch_service__["a" /* BatchService */],
                __WEBPACK_IMPORTED_MODULE_13__teacher_service__["a" /* TeacherService */],
                __WEBPACK_IMPORTED_MODULE_14__student_service__["a" /* StudentService */],
                __WEBPACK_IMPORTED_MODULE_15__lecture_service__["a" /* LectureService */],
                __WEBPACK_IMPORTED_MODULE_16__subject_service__["a" /* SubjectService */],
                __WEBPACK_IMPORTED_MODULE_17__studentbatch_service__["a" /* StudentbatchService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/batch.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BatchService = /** @class */ (function () {
    function BatchService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:8003/api/batches';
    }
    BatchService.prototype.getBatches = function () {
        return this.http.get(this.BASE_URL);
    };
    BatchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BatchService);
    return BatchService;
}());



/***/ }),

/***/ "./src/app/batch/batch.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/batch/batch.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  batch works!\n</p>\n"

/***/ }),

/***/ "./src/app/batch/batch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BatchComponent = /** @class */ (function () {
    function BatchComponent() {
    }
    BatchComponent.prototype.ngOnInit = function () {
    };
    BatchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-batch',
            template: __webpack_require__("./src/app/batch/batch.component.html"),
            styles: [__webpack_require__("./src/app/batch/batch.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BatchComponent);
    return BatchComponent;
}());



/***/ }),

/***/ "./src/app/course.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseService = /** @class */ (function () {
    function CourseService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:8003/api/courses';
        this.BATCH_URL = 'http://localhost:8003/api/batches';
        this.LECTURE_URL = 'http://localhost:8003/api/lectures';
    }
    CourseService.prototype.getCourses = function () {
        return this.http.get(this.BASE_URL);
    };
    CourseService.prototype.addCourse = function (value) {
        return this.http.post(this.BASE_URL, value);
    };
    CourseService.prototype.getBatches = function (id) {
        return this.http.get(this.BASE_URL + '/' + id + '/batches');
    };
    CourseService.prototype.addBatch = function (value) {
        return this.http.post(this.BATCH_URL, value);
    };
    CourseService.prototype.getLectures = function (courseId, batchId) {
        return this.http.get(this.BASE_URL + '/' + courseId + '/batches/' + batchId + '/lectures');
    };
    CourseService.prototype.addLecture = function (value) {
        return this.http.post(this.LECTURE_URL, value);
    };
    CourseService.prototype.getStudents = function (courseId, batchId) {
        return this.http.get(this.BASE_URL + '/' + courseId + '/batches/' + batchId + '/students');
    };
    CourseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "./src/app/course/course.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course/course.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:antiquewhite\">\n         <div align=\"center\">\n            <font size=\"9\" color=\"coral\" align=\"center\">Courses</font>\n        </div>\n</div>\n    <div align=\"center\">\n        <table class=\"form-group\">\n            <tr *ngFor=\"let item of Courses; let y = index\">\n                <td style=\"background-color:cornsilk\">\n                    <font size=\"5\" (click)=\"ViewBatch(y)\">{{item.Name}}</font>\n                </td>    \n            </tr>\n        </table>\n    </div>\n    <br>\n    <br>\n    <div align=\"center\"  *ngIf=\"BatchList.length!==0\" >\n        <table class=\"form-group\" style=\"border:ridge;width:200px\">\n            <tr>\n                <th>\n                    Batch Name\n                </th>\n            </tr>\n            <tr *ngFor=\"let item of BatchList; let y = index\">\n                <td style=\"background-color:cornsilk\">\n                    <font size=\"4\" (click)=\"ViewLectures(y);ViewStudents(y)\" >{{item.Name}}</font>\n                </td>    \n            </tr>\n        </table>\n        <div class=\"container\">\n            <table align=\"center\" style=\"border:ridge\">\n                <tr width=\"150px\">\n                    <td width=\"15px\">\n                        <font size=\"5\" color=\"brown\">BatchName:</font>\n                    </td>\n                    <td width=\"15px\">\n                        <input name=\"batch\" type=\"text\" style=\"background-color:antiquewhite\" required  #Newbatch>\n                    </td>\n                    <td>\n                        <button style=\"border:none\" (click)=\"addBatch(Newbatch.value)\">Add</button>\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <br />\n        <table class=\"form-group\" *ngIf=\"LectureList.length!==0\" style=\"border:ridge;width:200px\" >\n            <tr>\n                <th>\n                    Lecture Name\n                </th>\n            </tr>\n            <tr *ngFor=\"let item of LectureList; let y = index\">\n                <td style=\"background-color:cornsilk\">\n                    <font size=\"4\"  >{{item.Name}}</font>\n                </td>    \n            </tr>\n        </table>\n         <div class=\"container\">\n            <table align=\"center\" style=\"border:ridge\">\n                <tr width=\"150px\">\n                    <td width=\"15px\">\n                        <font size=\"5\" color=\"brown\">LectureName:</font>\n                    </td>\n                    <td width=\"15px\">\n                        <input name=\"batch\" type=\"text\" style=\"background-color:antiquewhite\" required  #Newlecture>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        Enter TeacherID from\n                    </td>\n                    <td>\n                        <font size=\"3\" color=\"red\">1</font> to <font size=\"3\" color=\"red\">{{teacherListLength}}</font>  \n                    </td>\n                </tr>\n                <tr width=\"150px\">\n                    <td width=\"15px\">\n                        <font size=\"5\" color=\"brown\">TeacherId:</font>\n                    </td>\n                    <td width=\"15px\">\n                        <input name=\"batch\" type=\"text\" style=\"background-color:antiquewhite\" required  #teacherID>\n                    </td>\n                    <td>\n                        <button style=\"border:none\" (click)=\"addLecture(Newlecture.value,teacherID.value)\">Add</button>\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <br />\n        \n        <table class=\"form-group\" *ngIf=\"StudentList.length!==0\" style=\"border:ridge;width:200px\">\n            <tr>\n                <th>\n                    Student Name\n                </th>\n            </tr>\n            <tr *ngFor=\"let item of StudentList; let y = index\">\n                <td style=\"background-color:cornsilk\">\n                    <font size=\"4\" >{{item.Name}}</font>\n                </td>    \n            </tr>\n            <input type=\"text\" style=\"background-color:antiquewhite\" required  #Newstudent>\n            <button style=\"border:none\" (click)=\"addStudent(Newstudent.value)\">Add</button>\n        </table>\n        \n    </div>\n    <br>\n    <br>\n    <div align=\"center\" style=\"border:solid\">\n    <div class=\"container\">\n        <p><font size=\"4\" color=\"coral\" align=\"center\">Add Course</font></p>\n            <table align=\"center\" style=\"border:ridge\">\n                <tr width=\"150px\">\n                    <td width=\"15px\">\n                        <font size=\"5\" color=\"brown\">CourseName:</font>\n                    </td>\n                    <td width=\"15px\">\n                        <input name=\"coursename\" type=\"text\" style=\"background-color:antiquewhite\" required  #Newcourse>\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <br />\n        <div align=\"center\">\n             <button style=\"border:none\" (click)=\"addCourse(Newcourse.value)\">Add</button>\n        </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/course/course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course_service__ = __webpack_require__("./src/app/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_service__ = __webpack_require__("./src/app/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_service__ = __webpack_require__("./src/app/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__studentbatch_service__ = __webpack_require__("./src/app/studentbatch.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CourseComponent = /** @class */ (function () {
    function CourseComponent(api, api2, api3, api4) {
        this.api = api;
        this.api2 = api2;
        this.api3 = api3;
        this.api4 = api4;
        this.BatchList = [];
        this.LectureList = [];
        this.StudentList = [];
        this.TeacherList = [];
        this.newStudent = [];
    }
    CourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getCourses()
            .subscribe(function (event) {
            _this.Courses = event;
        });
        this.api2.getTeachers()
            .subscribe(function (event) {
            _this.TeacherList = event;
            _this.teacherListLength = _this.TeacherList.length;
        });
    };
    CourseComponent.prototype.addCourse = function (name) {
        var _this = this;
        console.log(name);
        var data = {
            Name: name
        };
        this.api.addCourse(data)
            .subscribe(function (event) {
            _this.Courses[_this.Courses.length] = {
                Name: event.Name
            };
            window.alert("Course has been added");
        });
    };
    CourseComponent.prototype.ViewBatch = function (id) {
        var _this = this;
        this.BatchList = [];
        this.coursenumber = id;
        this.api.getBatches((id + 1))
            .subscribe(function (event) {
            _this.BatchList = event;
        });
    };
    CourseComponent.prototype.addBatch = function (value) {
        var _this = this;
        var data = {
            Name: value,
            courseId: this.coursenumber + 1
        };
        this.api.addBatch(data)
            .subscribe(function (event) {
            _this.BatchList[_this.BatchList.length] = {
                Name: event.Name,
                courseId: event.courseId
            };
            window.alert("Batch has been added");
        });
    };
    CourseComponent.prototype.ViewLectures = function (batchID) {
        var _this = this;
        this.batchnumber = batchID;
        this.api.getLectures(this.coursenumber + 1, batchID + 1)
            .subscribe(function (event) {
            _this.LectureList = event;
        });
    };
    CourseComponent.prototype.addLecture = function (lectureName, id) {
        var _this = this;
        var data = {
            Name: lectureName,
            teacherId: id,
            batchId: this.batchnumber + 1
        };
        this.api.addLecture(data)
            .subscribe(function (event) {
            _this.LectureList[_this.LectureList.length] = {
                Name: event.Name,
                teacherId: event.teacherId,
                batchId: event.batchId
            };
            window.alert("Lecture has been added");
        });
    };
    CourseComponent.prototype.ViewStudents = function (batchID) {
        var _this = this;
        this.api.getStudents(this.coursenumber + 1, batchID + 1)
            .subscribe(function (event) {
            _this.StudentList = event;
        });
    };
    CourseComponent.prototype.addStudent = function (value) {
        var _this = this;
        var data = {
            Name: value
        };
        this.api3.addStudent(data)
            .subscribe(function (event) {
            _this.StudentList[_this.StudentList.length] = {
                Name: event.Name
            };
            window.alert("Student has been added");
        });
        this.api3.getStudents()
            .subscribe(function (event) {
            _this.newStudent = event;
            _this.newid = _this.newStudent.length;
            _this.addstbatch();
        });
    };
    CourseComponent.prototype.addstbatch = function () {
        var data2 = {
            studentId: this.newStudent.length,
            batchId: this.batchnumber + 1
        };
        console.log(data2);
        this.api4.addStudentBatch(data2)
            .subscribe(function (event) {
        });
    };
    CourseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-course',
            template: __webpack_require__("./src/app/course/course.component.html"),
            styles: [__webpack_require__("./src/app/course/course.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__course_service__["a" /* CourseService */], __WEBPACK_IMPORTED_MODULE_2__teacher_service__["a" /* TeacherService */], __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */], __WEBPACK_IMPORTED_MODULE_4__studentbatch_service__["a" /* StudentbatchService */]])
    ], CourseComponent);
    return CourseComponent;
}());



/***/ }),

/***/ "./src/app/lecture.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LectureService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LectureService = /** @class */ (function () {
    function LectureService() {
    }
    LectureService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LectureService);
    return LectureService;
}());



/***/ }),

/***/ "./src/app/lecture/lecture.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lecture/lecture.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  lecture works!\n</p>\n"

/***/ }),

/***/ "./src/app/lecture/lecture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LectureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LectureComponent = /** @class */ (function () {
    function LectureComponent() {
    }
    LectureComponent.prototype.ngOnInit = function () {
    };
    LectureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lecture',
            template: __webpack_require__("./src/app/lecture/lecture.component.html"),
            styles: [__webpack_require__("./src/app/lecture/lecture.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LectureComponent);
    return LectureComponent;
}());



/***/ }),

/***/ "./src/app/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentService = /** @class */ (function () {
    function StudentService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:8003/api/students';
    }
    StudentService.prototype.getStudents = function () {
        return this.http.get(this.BASE_URL);
    };
    StudentService.prototype.addStudent = function (value) {
        return this.http.post(this.BASE_URL, value);
    };
    StudentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/student/student.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/student/student.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:antiquewhite\">\n         <div align=\"center\">\n            <font size=\"9\" color=\"coral\" align=\"center\">Students</font>\n        </div>\n</div>\n\n<div align=\"center\">\n    <table class=\"form-group\">\n        <tr *ngFor=\"let item of StudentList; let y = index\">\n            <td style=\"background-color:cornsilk\">\n                <font size=\"5\" (click)=\"ViewBatches(y)\">{{item.Name}}</font>\n            </td>    \n        </tr>\n    </table>\n    \n    <div *ngIf=\"viewbatches\">\n        Enter BatchId from <font size=\"3\" color=\"red\">1</font> to <font size=\"3\" color=\"red\">{{batchNumber}}</font>  \n        <table align=\"center\" style=\"border:ridge\">\n                <tr width=\"150px\">\n                    <td width=\"15px\">\n                        <font size=\"5\" color=\"brown\">BatchId:</font>\n                    </td>\n                    <td width=\"15px\">\n                        <input name=\"batch\" type=\"text\" style=\"background-color:antiquewhite\" required #batchID>\n                    </td>\n                </tr>\n                <tr>\n                    <button style=\"border:none\" (click)=\"addStudentBatch(batchID.value)\">Add</button>\n                </tr>\n        </table>\n    </div>\n</div>\n\n<div align=\"center\">\n    <div class=\"container\">\n        <p><font size=\"6\" color=\"coral\" align=\"center\">Add Student</font></p>\n            <table align=\"center\" style=\"border:ridge\">\n                <tr width=\"150px\">\n                    <td width=\"15px\">\n                        <font size=\"5\" color=\"brown\">StudentName:</font>\n                    </td>\n                    <td width=\"15px\">\n                        <input name=\"studentname\" type=\"text\" style=\"background-color:antiquewhite\" required  #Newstudent>\n                    </td>\n                </tr>\n            </table>\n        </div>\n\n        <br />\n        <div align=\"center\">\n             <button style=\"border:none\" (click)=\"addStudent(Newstudent.value)\">Add</button>\n        </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__student_service__ = __webpack_require__("./src/app/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__batch_service__ = __webpack_require__("./src/app/batch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__studentbatch_service__ = __webpack_require__("./src/app/studentbatch.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentComponent = /** @class */ (function () {
    function StudentComponent(api, api2, api3) {
        this.api = api;
        this.api2 = api2;
        this.api3 = api3;
        this.viewbatches = false;
    }
    StudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getStudents()
            .subscribe(function (event) {
            _this.StudentList = event;
            console.log(_this.StudentList);
        });
        this.api2.getBatches()
            .subscribe(function (event) {
            _this.BatchList = event;
            _this.batchNumber = _this.BatchList.length;
        });
    };
    StudentComponent.prototype.addStudent = function (name) {
        var _this = this;
        console.log(name);
        var data = {
            Name: name
        };
        this.api.addStudent(data)
            .subscribe(function (event) {
            _this.StudentList[_this.StudentList.length] = {
                Name: event.Name
            };
            console.log(_this.StudentList);
        });
    };
    StudentComponent.prototype.ViewBatches = function (studentId) {
        this.studentid = studentId;
        this.viewbatches = true;
    };
    StudentComponent.prototype.addStudentBatch = function (batchid) {
        var data = {
            studentId: this.studentid + 1,
            batchId: batchid
        };
        this.api3.addStudentBatch(data)
            .subscribe(function (event) {
        });
    };
    StudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-student',
            template: __webpack_require__("./src/app/student/student.component.html"),
            styles: [__webpack_require__("./src/app/student/student.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */], __WEBPACK_IMPORTED_MODULE_2__batch_service__["a" /* BatchService */], __WEBPACK_IMPORTED_MODULE_3__studentbatch_service__["a" /* StudentbatchService */]])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/studentbatch.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentbatchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentbatchService = /** @class */ (function () {
    function StudentbatchService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:8003/api/stbatches';
    }
    StudentbatchService.prototype.addStudentBatch = function (value) {
        return this.http.post(this.BASE_URL, value);
    };
    StudentbatchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], StudentbatchService);
    return StudentbatchService;
}());



/***/ }),

/***/ "./src/app/subject.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubjectService = /** @class */ (function () {
    function SubjectService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:8003/api/subjects';
    }
    SubjectService.prototype.getSubjects = function () {
        return this.http.get(this.BASE_URL);
    };
    SubjectService.prototype.addSubject = function (value) {
        return this.http.post(this.BASE_URL, value);
    };
    SubjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SubjectService);
    return SubjectService;
}());



/***/ }),

/***/ "./src/app/subject/subject.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/subject/subject.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:antiquewhite\">\n  <div align=\"center\">\n    <font size=\"9\" color=\"coral\" align=\"center\">Subjects</font>\n  </div>\n</div>\n\n<div align=\"center\">\n    <table class=\"form-group\">\n        <tr *ngFor=\"let item of SubjectList; let y = index\">\n            <td style=\"background-color:cornsilk\">\n                {{item.Name}} \n            </td>    \n        </tr>\n    </table>\n</div>\n\n<div align=\"center\">\n    <div class=\"container\">\n        <p><font size=\"6\" color=\"coral\" align=\"center\">Add Subject</font></p>\n            <table align=\"center\" style=\"border:ridge\">\n                <tr width=\"150px\">\n                    <td width=\"15px\">\n                        <font size=\"5\" color=\"brown\">SubjectName:</font>\n                    </td>\n                    <td width=\"15px\">\n                        <input name=\"subjectname\" type=\"text\" style=\"background-color:antiquewhite\" required  #Newsubject>\n                    </td>\n                </tr>\n                <tr>\n                  Enter CourseId from <font size=\"3\" color=\"red\">1</font> to <font size=\"3\" color=\"red\">{{numberOfCourses}}</font>  \n                  <!-- <td *ngFor=\"let val of CourseId\">\n                    {{val}}\n                  </td> -->\n                </tr>\n\n                <tr width=\"150px\">\n                    <td width=\"15px\">\n                        <font size=\"5\" color=\"brown\">CourseId:</font>\n                    </td>\n                    <td width=\"15px\">\n                        <input name=\"course\" type=\"text\" style=\"background-color:antiquewhite\" required #courseValue>\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <br />\n        <div align=\"center\">\n             <button style=\"border:none\" (click)=\"addSubject(Newsubject.value,courseValue.value)\">Add</button>\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/subject/subject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subject_service__ = __webpack_require__("./src/app/subject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_service__ = __webpack_require__("./src/app/course.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubjectComponent = /** @class */ (function () {
    function SubjectComponent(api, api2) {
        this.api = api;
        this.api2 = api2;
    }
    SubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getSubjects()
            .subscribe(function (event) {
            _this.SubjectList = event;
            console.log(_this.SubjectList);
        });
        this.api2.getCourses()
            .subscribe(function (event) {
            _this.Courses = event;
            console.log(_this.Courses);
            _this.numberOfCourses = _this.Courses.length;
        });
    };
    SubjectComponent.prototype.addSubject = function (subject, id) {
        var _this = this;
        var data = {
            Name: subject,
            courseId: id
        };
        this.api.addSubject(data)
            .subscribe(function (event) {
            _this.SubjectList[_this.SubjectList.length] = {
                Name: event.Name,
                courseId: event.courseId
            };
            window.alert("subject has been added");
        });
    };
    SubjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-subject',
            template: __webpack_require__("./src/app/subject/subject.component.html"),
            styles: [__webpack_require__("./src/app/subject/subject.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__subject_service__["a" /* SubjectService */], __WEBPACK_IMPORTED_MODULE_2__course_service__["a" /* CourseService */]])
    ], SubjectComponent);
    return SubjectComponent;
}());



/***/ }),

/***/ "./src/app/teacher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeacherService = /** @class */ (function () {
    function TeacherService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:8003/api/teachers';
    }
    TeacherService.prototype.getTeachers = function () {
        return this.http.get(this.BASE_URL);
    };
    TeacherService.prototype.addTeacher = function (value) {
        return this.http.post(this.BASE_URL, value);
    };
    TeacherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TeacherService);
    return TeacherService;
}());



/***/ }),

/***/ "./src/app/teacher/teacher.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/teacher/teacher.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:antiquewhite\">\n  <div align=\"center\">\n    <font size=\"9\" color=\"coral\" align=\"center\">Teachers</font>\n  </div>\n</div>\n\n<div align=\"center\">\n    <table class=\"form-group\">\n        <tr *ngFor=\"let item of TeacherList\">\n            <td style=\"background-color:cornsilk\">\n                {{item.Name}} \n            </td>    \n        </tr>\n    </table>\n</div>\n\n<div align=\"center\">\n    <div class=\"container\">\n        <p><font size=\"6\" color=\"coral\" align=\"center\">Add Teacher</font></p>\n            <table align=\"center\" style=\"border:ridge\">\n                <tr width=\"150px\">\n                    <td width=\"15px\">\n                        <font size=\"5\" color=\"brown\">TeacherName:</font>\n                    </td>\n                    <td width=\"15px\">\n                        <input name=\"teachername\" type=\"text\" style=\"background-color:antiquewhite\" required  #Newteacher>\n                    </td>\n                </tr>\n                <tr>\n                  Enter SubjectId from <font size=\"3\" color=\"red\">1</font> to <font size=\"3\" color=\"red\">{{numberOfSubjects}}</font>             \n                </tr>\n\n                <tr width=\"150px\">\n                    <td width=\"15px\">\n                        <font size=\"5\" color=\"brown\">SubjectId:</font>\n                    </td>\n                    <td width=\"15px\">\n                        <input name=\"subject\" type=\"text\" style=\"background-color:antiquewhite\" required #subjectValue>\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <br />\n        <div align=\"center\">\n             <button style=\"border:none\" (click)=\"addTeacher(Newteacher.value,subjectValue.value)\">Add</button>\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/teacher/teacher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__teacher_service__ = __webpack_require__("./src/app/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subject_service__ = __webpack_require__("./src/app/subject.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeacherComponent = /** @class */ (function () {
    function TeacherComponent(api, api2) {
        this.api = api;
        this.api2 = api2;
    }
    TeacherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getTeachers()
            .subscribe(function (event) {
            _this.TeacherList = event;
        });
        this.api2.getSubjects()
            .subscribe(function (event) {
            _this.SubjectList = event;
            _this.numberOfSubjects = _this.SubjectList.length;
        });
    };
    TeacherComponent.prototype.addTeacher = function (teacher, id) {
        var _this = this;
        var data = {
            Name: teacher,
            subjectId: id
        };
        this.api.addTeacher(data)
            .subscribe(function (event) {
            _this.TeacherList[_this.TeacherList.length] = {
                Name: event.Name,
                subjectId: event.subjectId
            };
        });
    };
    TeacherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-teacher',
            template: __webpack_require__("./src/app/teacher/teacher.component.html"),
            styles: [__webpack_require__("./src/app/teacher/teacher.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__teacher_service__["a" /* TeacherService */], __WEBPACK_IMPORTED_MODULE_2__subject_service__["a" /* SubjectService */]])
    ], TeacherComponent);
    return TeacherComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map