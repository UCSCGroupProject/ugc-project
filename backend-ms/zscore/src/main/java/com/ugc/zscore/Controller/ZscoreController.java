package com.ugc.zscore.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("/api/zscore")
@CrossOrigin("*")

public class ZscoreController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String helloWorld(){
        return "Welcome Ashi";
    }

}
