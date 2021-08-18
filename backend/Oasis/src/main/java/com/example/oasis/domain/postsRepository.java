package com.example.oasis.domain;

import org.springframework.data.jpa.repository.JpaRepository;

public interface postsRepository extends JpaRepository<post, Long> {
}
