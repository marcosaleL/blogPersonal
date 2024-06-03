package com.blog.personal.blog_personal.model.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@Entity
@Table(name = "comment")
@AllArgsConstructor
@NoArgsConstructor
public class CommentEntity {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    private String text;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity author;
    
    @ManyToOne
    @JoinColumn(name = "article_id", nullable = false)
    private ArticleEntity article;
    
    private String dateOfPublish;

    @ManyToOne
    @JoinColumn(name = "father_comment_id")
    private CommentEntity fatherComment;
    
}
