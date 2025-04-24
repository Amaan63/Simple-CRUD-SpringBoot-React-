package com.crud.controller;

import com.crud.entities.Students;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {
    @PostMapping("/addStudent")
    public Students addStudentController(@RequestBody Students student){
        return student;
    }
}
