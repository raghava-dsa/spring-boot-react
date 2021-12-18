
package com.example.demo.controller;

import com.example.demo.model.Store;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
public class MyRestController {
    @Autowired
    ObjectMapper obj;

    @GetMapping(value = "/api/getNewStores")
    public List<Store> getStores() throws IOException {
        List<Store> stores = obj.readValue(new File("/Users/skuma/Desktop/projects/mywork/demo/src/main/java/com/example/demo/controller/data.json"), new TypeReference<List<Store>>(){});
        return stores;
    }
}