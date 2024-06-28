package com.blog.personal.blog_personal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.personal.blog_personal.model.entities.UserEntity;
import com.blog.personal.blog_personal.service.UserServiceInterface;

@RestController
@RequestMapping("api/v1")
public class BlogPersonalController {

    @Autowired
    private UserServiceInterface service;
    
    @PostMapping("/signUp")
    public ResponseEntity<ResponseSignUpDTO> signUp(@RequestBody RequestSignUpDto user){
        service.saveUser(user);
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserEntity user){
        return ResponseEntity.status(HttpStatus.OK).body("Estas logueado")
    }

}
