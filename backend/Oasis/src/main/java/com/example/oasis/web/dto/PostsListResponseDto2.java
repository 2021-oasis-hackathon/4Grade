package com.example.oasis.web.dto;

import com.example.oasis.domain.Post;
import com.example.oasis.domain.Post2;
import lombok.Getter;

@Getter
public class PostsListResponseDto2 {
    private String title;
    private String contents;
    private String college;
    private String name;
    private String comment;
    private String posting_date;
    private String views;
    private String likes;

    public PostsListResponseDto2(Post2 entity) {
        this.title = entity.getTitle();
        this.contents = entity.getContents();
        this.college = entity.getCollege();
        this.name = entity.getName();
        this.comment = entity.getComment();
        this.posting_date = entity.getPosting_date();
        this.views = entity.getViews();
        this.likes = entity.getLikes();
    }
}