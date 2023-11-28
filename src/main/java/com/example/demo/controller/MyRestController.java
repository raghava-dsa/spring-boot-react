
package com.example.demo.controller;

import com.example.demo.model.CcReqParams;
import com.example.demo.model.Store;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
        List<Store> stores = obj.readValue(new File("/Users/skuma/Desktop/projects/mywork/demo/src/main/java/com/example/demo/controller/data.json"), new TypeReference<List<Store>>() {
        });
        return stores;
    }


    @PostMapping(value = "/api/getNewStoresTIAndCommInv")
    public List<Store> getNewStoresTIAndCommInv(@RequestBody CcReqParams body) throws IOException {
        System.out.println("===body===" + body);
        List<Store> stores = null;
        if (body.getCcs().get(0).equals("12345")) {
            stores = obj.readValue(new File("/Users/skuma/Desktop/projects/mywork/demo/src/main/java/com/example/demo/controller/dataTIANDINV.json"), new TypeReference<List<Store>>() {
            });
        }
        if (body.getCcs().get(0).equals("67890")) {
            stores = obj.readValue(new File("/Users/skuma/Desktop/projects/mywork/demo/src/main/java/com/example/demo/controller/dataTIANDINV1.json"), new TypeReference<List<Store>>() {
            });
        }
        if (body.getCcs().get(0).equals("111213")) {
            stores = obj.readValue(new File("/Users/skuma/Desktop/projects/mywork/demo/src/main/java/com/example/demo/controller/dataTIANDINV2.json"), new TypeReference<List<Store>>() {
            });
        }
        if (body.getCcs().get(0).equals("51525")) {
            stores = obj.readValue(new File("/Users/skuma/Desktop/projects/mywork/demo/src/main/java/com/example/demo/controller/dataTIANDINV3.json"), new TypeReference<List<Store>>() {
            });
        }
        return stores;
    }
}