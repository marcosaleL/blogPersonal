package com.blog.personal.blog_personal.model.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseSignUpDto {

    private Long userId;
    private String name;
    private String email;
    private boolean isActive;

    public ResponseSignUpDTO(UserEntity user) {
        this.userId = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.isActive = true;
    }

}