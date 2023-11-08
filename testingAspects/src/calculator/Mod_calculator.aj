package calculator;

public aspect Mod_calculator {
	int around(int x, int y): call(int Calculator.divide(int, int)) && args(x, y) {
		try {			
			int res =  proceed(x, y);
			System.out.println("No errors while adding");
			return res;
		} catch(Exception e) {
			System.out.println("There was error: " + e);
			return -1;
		}
	}
}
