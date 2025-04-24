package com.crud.service;

import com.crud.entities.Students;
import com.crud.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public Students updateStudent(Students updatedStudent) {
        Optional<Students> existingStudent = studentRepo.findById(updatedStudent.getId());
        Students studentToUpdate = existingStudent.get();
        studentToUpdate.setAge(updatedStudent.getAge());
        studentToUpdate.setName(updatedStudent.getName());
        studentToUpdate.setDepartment(updatedStudent.getDepartment());
        return studentRepo.save(studentToUpdate);
    }

    public boolean deleteStudent(long id){
        studentRepo.deleteById(id);
        return true;
    }

}
