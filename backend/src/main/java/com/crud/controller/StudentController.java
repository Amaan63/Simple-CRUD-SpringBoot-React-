package com.crud.controller;

import com.crud.entities.Students;
import com.crud.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/addStudent")
    public Students addStudentController(@RequestBody Students student){
        return studentService.addStudent(student);
    }

    @GetMapping("/viewAllStudents")
    public List<Students> getAllStudentsController(){
        return studentService.getAllStudents();
    }

    @PutMapping("/updateStudent")
    public Students updateStudentController(@RequestBody Students studentToUpdate){
        return studentService.updateStudent(studentToUpdate);
    }

    @DeleteMapping("/deleteStudent/{id}")
    public boolean deleteStudentController(@PathVariable long id){
        return studentService.deleteStudent(id);
    }
}
