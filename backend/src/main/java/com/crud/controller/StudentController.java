package com.crud.controller;

import com.crud.entities.Students;
import com.crud.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
    public List<Students> getAllStudents(){
        return studentService.getAllStudents();
    }
}
