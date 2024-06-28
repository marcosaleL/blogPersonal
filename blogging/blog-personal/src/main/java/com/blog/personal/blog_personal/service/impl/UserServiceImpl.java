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
    public ResponseSignUpDto signUp(RequestSignUpDTO requestSignUpDTO) {
        var userEntity = UserEntity.builder().name(user.getName()).email(user.getEmail()).password(user.getPassword()).build();
        var savedUser = userRepository.save(userEntity);
        return ResponseSignUpDto.builder().id(savedUser.getId().name(savedUser.getName()).email(savedUser.getEmail()).isActive(true).build(); 
    }

    @Override
    public ResponseLoginDto signUp(RequestLoginDto requestLoginDto) {
        if(userRepository.existsByEmail(requestLoginDto.getEmail()))
            var savedUser = userRepository.findByEmail(requestLoginDto.getEmail());
            if(savedUser.getPassword() == requestLoginDto.getPassword())
                return response = new ResponseLoginDto("Welcome");
            else
                return response = new ResponseLoginDto("Password incorrect");
        else
            return response = new ResponseLoginDto("User incorrect");
    }

}
