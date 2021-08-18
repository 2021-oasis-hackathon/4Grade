package com.example.oasis.domain;

import lombok.*;

import javax.persistence.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity(name="post2")
public class Post2 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT", nullable=false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable=false)
    private String contents;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String college;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String name;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String comment;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String posting_date;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String views;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String likes;

    @Builder
    public Post2(String title, String contents, String college, String name, String comment, String posting_date, String views, String likes)
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

}