package com.example.oasis.web;

import com.example.oasis.service.PostsService;
import com.example.oasis.web.dto.PostsListResponseDto;
import com.example.oasis.web.dto.PostsSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class PostsApiController {
    private final PostsService postsService;

    @GetMapping("/api/post")
    public List<PostsListResponseDto> findAllPost() {
        return postsService.findAll();
    }

    @PostMapping("/api/post")
    public Long save(@RequestBody PostsSaveRequestDto postsSaveRequestDto){
        return postsService.save(postsSaveRequestDto);
    }

//    @GetMapping("/api/register/{id}")
//    public RegistersResponseDto findByid(@PathVariable Long id){
//        return postsService.findById(id);
//    }
}
