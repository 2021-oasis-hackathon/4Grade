package com.example.oasis.service;

import com.example.oasis.domain.Post;
import com.example.oasis.domain.Post2;
import com.example.oasis.domain.PostsRepository;
import com.example.oasis.domain.PostsRepository2;
import com.example.oasis.web.dto.PostsListResponseDto;
import com.example.oasis.web.dto.PostsListResponseDto2;
import com.example.oasis.web.dto.PostsSaveRequestDto;
import com.example.oasis.web.dto.PostsSaveRequestDto2;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class PostsService2 {
    private final PostsRepository2 postsRepository2;

    @Transactional
    public Long save(PostsSaveRequestDto2 requestDto){
        return postsRepository2.save(requestDto.toEntity()).getId();
    }

    public PostsListResponseDto2 findById(Long id){
        Post2 entity = postsRepository2.findById(id)
                .orElseThrow(()->new IllegalArgumentException("해당 게시글이 없습니다. id" + id));

        return new PostsListResponseDto2(entity);
    }

    @Transactional(readOnly = true)
    public List<PostsListResponseDto2> findAll(){
        return postsRepository2.findAll().stream()
                .map(PostsListResponseDto2::new)
                .collect(Collectors.toList());
    }
}