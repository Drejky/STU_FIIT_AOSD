package calculator;

public class Main {
	public static void main(String[] args) {
		Calculator leCalc = new Calculator();
		System.out.println("Start of program");
		System.out.println(leCalc.divide(2, 0));
		System.out.println(leCalc.divide(2, 2));
		System.out.println("End of program");
	}
}