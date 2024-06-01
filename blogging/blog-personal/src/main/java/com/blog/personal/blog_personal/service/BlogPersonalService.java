package com.blog.personal.blog_personal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blog.personal.blog_personal.model.entities.User;
import com.blog.personal.blog_personal.repository.BlogPersonalRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class BlogPersonalService {

    @Autowired
    private final BlogPersonalRepository repository;

    public void saveUser(User user) {
        repository.save(user);
    } 

}
