package com.ugc.university.controller;

import com.ugc.university.payload.response.PayloadResponse;
import com.ugc.university.payload.response.ResType;
import com.ugc.university.payload.response.universityDetails.UniDetailsResponse;
import com.ugc.university.service.UniversityDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/university/details")
public class UniversityDetailsController {
    @Autowired
    private UniversityDetailsService universityDetailsService;

    @GetMapping("/all")
    public ResponseEntity<?> getAllUniversityList(){
        List<UniDetailsResponse> uniDetailsResponseList = universityDetailsService.getAllUniversityList();

        return ResponseEntity.ok(new PayloadResponse(uniDetailsResponseList, "All Universities list", ResType.OK));
    }

    @GetMapping("/profile")
    public ResponseEntity<?> getUniversityProfile(@RequestParam(name = "username") String username){
         return universityDetailsService.getUniversityProfile(username);
    }
}
