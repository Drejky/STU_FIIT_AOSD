package Bakery;

import java.util.ArrayList;

public aspect FillDonut {
	pointcut donutBaking(float x, ArrayList<Filling> fillings): call(EmptyDonut.new(float, ArrayList<Filling>)) && args(x, fillings);

    Object around(float x, ArrayList<Filling> fillings): donutBaking(x, fillings) {
        if (fillings.size() > 0) {
            System.out.println("Filling donut");
            return new FilledDonut(fillings);
        }
        System.out.println("Ran out of filling, making empty donut");
        return proceed(x, fillings);
    }
    

    pointcut arrErr(ArrayList<Object> a, ArrayList<Filling> b):
    	execution(boolean Bakery.checkQuantity(ArrayList<Object>, ArrayList<Filling>)) &&
    	args(a, b);
    boolean around(ArrayList<Object> a, ArrayList<Filling> b): arrErr(a, b) {
        try {
            return proceed(a, b);
        } catch (ArithmeticException err) {
            System.out.println("There was an error: " + err);
            return false; // or handle the error as needed
        }
    }
}

