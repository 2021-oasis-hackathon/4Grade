package com.example.oasis.web.dto;

import com.example.oasis.domain.Post;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@Getter
@NoArgsConstructor
public class PostsSaveRequestDto {

    private String title;
    private String contents;
    private String college;
    private String name;
    private String comment;
    private String posting_date;
    private String views;
    private String likes;

    @Builder
    public PostsSaveRequestDto(String title, String contents, String college, String name, String comment, String posting_date, String views, String likes)
    {
        this.title = title;
        this.contents = contents;
        this.college = college;
        this.name = name;
        this.comment = comment;
        this.posting_date = posting_date;
        this.views = views;
        this.likes = likes;
    }

    public Post toEntity(){
        return Post.builder()
                .title(title)
                .contents(contents)
                .college(college)
                .name(name)
                .comment(comment)
                .posting_date(posting_date)
                .views(views)
                .likes(likes)
                .build();
    }
}