package Cookies;

public aspect toFill {
	    pointcut donutBaking(String fill): call(Donut.new(String)) && args(fill);

	    Donut around(String fill): donutBaking(fill) {
	    	Donut foo = proceed(fill);
	    	System.out.println(fill);
	        if (!fill.equals("filled")) {
	            return foo;
	        }else {
	        	return new FilledDonut();
	        }
	    }

}
