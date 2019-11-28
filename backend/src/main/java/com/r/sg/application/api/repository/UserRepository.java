package com.r.sg.application.api.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.r.sg.application.entities.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

}