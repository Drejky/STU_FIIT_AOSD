package Bakery;

import java.util.ArrayList;

public aspect CheckQuantityAspect {
    pointcut checkQuantity(ArrayList<Object> donuts, ArrayList<Filling> fillings): 
        call(boolean Bakery.checkQuantity(ArrayList, ArrayList<Filling>)) && args(donuts, fillings);

    after(ArrayList<Object> donuts, ArrayList<Filling> fillings) throwing (Exception e): checkQuantity(donuts, fillings) {
        System.out.println("An exception has been thrown: " + e.getMessage());
    }
}