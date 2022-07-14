package com.ugc.user.controller;

import com.ugc.user.payload.request.LoginRequest;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {
    @GetMapping("/checkstatus")
    public String checkStatus(){
        return "Working!";
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest){
        return loginRequest.toString();
    }
}
