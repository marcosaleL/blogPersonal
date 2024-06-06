package com.blog.personal.blog_personal.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blog.personal.blog_personal.model.entities.UserEntity;
import com.blog.personal.blog_personal.repository.UserRepository;
import com.blog.personal.blog_personal.service.UserServiceInterface;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserServiceInterface {

    @Autowired
    private final UserRepository userRepository;

    @Override
    public void saveUser(UserEntity user) {
        userRepository.save(user);
    }

}
