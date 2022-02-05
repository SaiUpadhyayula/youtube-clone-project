package com.programming.techie.youtubeclone.repository;

import com.programming.techie.youtubeclone.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}
