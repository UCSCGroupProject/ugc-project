package com.ugc.selections.Controller;

import com.ugc.selections.Entity.ALPassedStudent;
import com.ugc.selections.Entity.AppliedStudent;
import com.ugc.selections.Entity.SelectedStudent;
import com.ugc.selections.Service.SelectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping
@CrossOrigin("*")
public class SelectionController {

    private final SelectionService studentService;

    @Autowired
    public SelectionController(SelectionService studentService) {
        this.studentService = studentService;
    }

    @GetMapping(path = "appliedStudents")
    public List<AppliedStudent> getAppliedStudents(){
        return studentService.getAppliedStudents();
    }

    @GetMapping(path = "ALPassedStudents")
    public List<ALPassedStudent> getALPassedStudents(){
        return studentService.getALPassedStudents();
    }

    @GetMapping(path = "selectStudents")
    public Optional<List<SelectedStudent>> selectStudents(){
        List<SelectedStudent> selectedStudents =  studentService.selectStudents();
        if(selectedStudents.isEmpty()){
            return null;
        }
        else return Optional.of(selectedStudents);
    }
}
