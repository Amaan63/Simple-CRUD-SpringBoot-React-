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
    @CrossOrigin("http://localhost:5173")
    public Students addStudentController(@RequestBody Students student){
        return studentService.addStudent(student);
    }

    @GetMapping("/viewAllStudents")
    @CrossOrigin("http://localhost:5173")
    public List<Students> getAllStudentsController(){
        return studentService.getAllStudents();
    }

    @PutMapping("/updateStudent")
    @CrossOrigin("http://localhost:5173")
    public Students updateStudentController(@RequestBody Students studentToUpdate){
        return studentService.updateStudent(studentToUpdate);
    }

    @DeleteMapping("/deleteStudent/{id}")
    @CrossOrigin("http://localhost:5173")
    public boolean deleteStudentController(@PathVariable long id){
        return studentService.deleteStudent(id);
    }
}
