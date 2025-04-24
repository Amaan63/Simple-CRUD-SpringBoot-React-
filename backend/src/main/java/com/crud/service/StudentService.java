package com.crud.service;

import com.crud.entities.Students;
import com.crud.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepo studentRepo;


    public Students addStudent(Students student){
        return studentRepo.save(student);
    }

    public List<Students> getAllStudents(){
        return studentRepo.findAll();
    }
}
