package com.ugc.user;

import com.ugc.user.payload.request.UserTypeRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    RestTemplate restTemplate;

    @GetMapping("/getUserType")
    public String getUserType(@RequestBody UserTypeRequest userTypeRequest) {
        System.out.println("called");
        boolean result = restTemplate.getForObject("http://localhost:8081/api/student/isStudent", boolean.class, userTypeRequest);
        System.out.println(result);

        return  "student";
    }
}
