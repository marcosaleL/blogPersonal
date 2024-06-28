package com.blog.personal.blog_personal.service;

import com.blog.personal.blog_personal.model.entities.UserEntity;

public interface UserServiceInterface {

        public ResponseSignUpDto signUp(RequestSignUpDTO requestSignUpDTO);

        public ResponseLoginDto login(RequestLoginDto requesLoginDto);

}
