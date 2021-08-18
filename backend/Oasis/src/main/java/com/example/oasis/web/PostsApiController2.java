package com.example.oasis.web;

import com.example.oasis.service.PostsService;
import com.example.oasis.service.PostsService2;
import com.example.oasis.web.dto.PostsListResponseDto;
import com.example.oasis.web.dto.PostsListResponseDto2;
import com.example.oasis.web.dto.PostsSaveRequestDto;
import com.example.oasis.web.dto.PostsSaveRequestDto2;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class PostsApiController2 {
    private final PostsService2 postsService2;

    @GetMapping("/api/post2")
    public List<PostsListResponseDto2> findAllPost() {
        return postsService2.findAll();
    }

    @PostMapping("/api/post2")
    public Long save(@RequestBody PostsSaveRequestDto2 postsSaveRequestDto2){
        return postsService2.save(postsSaveRequestDto2);
    }

//    @GetMapping("/api/register/{id}")
//    public RegistersResponseDto findByid(@PathVariable Long id){
//        return postsService.findById(id);
//    }
}
