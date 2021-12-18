package com.example.demo.model;

import java.util.List;


public class Store {
    public Store(String ccNumber, String desc, String ti, String commInv, Sku[] skus) {
        this.ccNumber = ccNumber;
        this.desc = desc;
        this.ti = ti;
        this.commInv = commInv;
        this.skus = skus;
    }

    public String ccNumber;
    public String desc;
    public String ti;
    public String commInv;
    public Sku[] skus;

}

class Sku {
    public String skuId;
    public String sizeProfile;
    public String ti;
    public String commInv;
}
