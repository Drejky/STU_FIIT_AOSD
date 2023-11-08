package testingAspects;

public aspect ForError {
	void around(): call(void Point.setX(..)) {
		try {
			System.out.println("its fine");
			proceed();
		} catch(Exception e) {
			System.out.println("Bad fuker");
		}
	}
	
}
