package com.example.Amazon_data.repo;

import com.example.Amazon_data.entity.Data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HomeRepo extends JpaRepository<Data, Integer> {
}
