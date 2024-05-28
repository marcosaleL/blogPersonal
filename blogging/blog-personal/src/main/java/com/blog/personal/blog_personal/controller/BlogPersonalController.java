package com.blog.personal.blog_personal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.blog.personal.blog_personal.model.entities.User;
import com.blog.personal.blog_personal.service.BlogPersonalService;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1")
public class BlogPersonalController {

    @Autowired
    private BlogPersonalService service;
    
    @PostMapping("/create")
    public ResponseEntity<User> login(@RequestBody User user){
        service.saveUser(user);
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

}
