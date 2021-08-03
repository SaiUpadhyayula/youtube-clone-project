package com.programming.techie.youtubeclone.repository;

import com.programming.techie.youtubeclone.model.Video;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VideoRepository extends MongoRepository<Video, String> {
}
