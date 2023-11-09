package Bakery;

import java.util.ArrayList;

public aspect FillDonut {
    pointcut donutBaking(float x, ArrayList<Filling> fillings): execution(FilledDonut.new(float, ArrayList<Filling>)) && args(x, fillings);

    Object around(float x, ArrayList<Filling> fillings): donutBaking(x, fillings) {
        if (fillings.size() > 0) {
            System.out.println("Filling donut");
            FilledDonut targetDonut = (FilledDonut) thisJoinPoint.getTarget();
            targetDonut.setFilling(fillings.remove(0));
            return proceed(x, fillings);
        }
        System.out.println("Ran out of filling, making empty donut");
        return new EmptyDonut(x, fillings);
    }
}
