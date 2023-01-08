package com.example.Amazon_data.controller;

import com.example.Amazon_data.entity.Data;
import com.example.Amazon_data.repo.HomeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/api/products")
public class HomeController {

    @Autowired
    HomeRepo repo;

    @CrossOrigin
    @GetMapping
    public List<Data> getData() {
        return repo.findAll();
    }

    @PostMapping
    public void saveData(@RequestBody Data data) {
       repo.save(data);
    }

    @PostMapping("/save")
    public void saveList(@RequestBody List<Data> data) {
        repo.saveAll(data);
    }

    @DeleteMapping("/del")
    public  void delData(@RequestParam int id) {
        repo.deleteById(id);
    }
}
