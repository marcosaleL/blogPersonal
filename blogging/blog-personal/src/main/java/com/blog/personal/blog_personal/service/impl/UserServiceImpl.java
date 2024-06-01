package com.blog.personal.blog_personal.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blog.personal.blog_personal.model.entities.UserEntity;
import com.blog.personal.blog_personal.repository.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl {

    @Autowired
    private final UserRepository userRepository;

    public void saveUser(UserEntity user) {
        userRepository.save(user);
    }

}
