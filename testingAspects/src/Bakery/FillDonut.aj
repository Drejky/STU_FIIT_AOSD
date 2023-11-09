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
}
