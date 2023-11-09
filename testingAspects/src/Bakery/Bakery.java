package Bakery;

import java.util.ArrayList;
import java.util.Random;

public class Bakery {
	private ArrayList<Object> donuts = new ArrayList<>();
	private static ArrayList<Filling> fillings = new ArrayList<Filling>();
	enum Flavours {
		Strawberry,
		Vanilla,
		Chocolate,
	};
	enum Thicknesses{
		Slim,
		Medium,
		Thick
	}
	
	public boolean checkQuantity(EmptyDonut[] a, Filling[] b) {
//		Check whether there is enough filling for all donuts;
		if(a.length / b.length <= 1) {
			return true;
		}
		return false;
	}
	
	
	public void refillFilling(int ammount) {
		Random random = new Random();
		
		for(int i = 0; i < ammount; i++) {
			Bakery.fillings.add(new Filling(Thicknesses.values()[random.nextInt(Thicknesses.values().length)].name(), Flavours.values()[random.nextInt(Flavours.values().length)].name()));
		}
	}
	
	private void bakeDonuts(int ammount) {
		for(int i = 0; i < ammount; i++) {
			this.donuts.add(new EmptyDonut(3, fillings));
		}
		
	}
    
	public static void main(String[] args) {
		Bakery bakery = new Bakery();
		bakery.refillFilling(10);
		bakery.bakeDonuts(15);
//		System.out.println(new EmptyDonut(32, fillings));
		

		for(Object foo: bakery.donuts) {
			System.out.println("Donut with" + foo);
		}
		System.out.println("End of program");
	}
}
