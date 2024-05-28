package com.blog.personal.blog_personal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.blog.personal.blog_personal.model.entities.User;

@Repository
public interface BlogPersonalRepository extends JpaRepository<User, Long>{

    User findByEmail(String email);

    User findByPasswordAndEmail(String password, String email);

}
