package com.blog.personal.blog_personal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blog.personal.blog_personal.model.entities.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long>{

    UserEntity findByEmail(String email);

    UserEntity findByPasswordAndEmail(String password, String email);

    UserEntity updatUserByEmail(String email);

}
