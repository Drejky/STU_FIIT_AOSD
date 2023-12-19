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
	
	public boolean checkQuantity(ArrayList<Object> a, ArrayList<Filling> b) {
//		Check whether there is enough filling for all donuts;
		if(a.size() / b.size() <= 1) {
			return true;
		}
		return false;
	}
	
	public boolean checkQuantityNoAspect(ArrayList<Object> a, ArrayList<Filling> b) {
//		Check whether there is enough filling for all donuts;
		if(a.size() / b.size() <= 1) {
			return true;
		}
		return false;
	}
	
	public boolean checkQuantityCondition(ArrayList<Object> a, ArrayList<Filling> b) {
		if(b.size() <= 0) {
			return false;
		}
//		Check whether there is enough filling for all donuts;
		if(a.size() / b.size() <= 1) {
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
//		bakery.refillFilling(10);
//		bakery.bakeDonuts(15);
		
		
		bakery.checkQuantity(bakery.donuts, fillings);
		
		ArrayList<Double> times = new ArrayList<>();

		for (int i = 0; i < 30; i++) {
		    long t0 = System.nanoTime();

		    if (i < 10) bakery.checkQuantity(bakery.donuts, fillings);
//		    else if (i >= 10 && i < 20) bakery.checkQuantityNoAspect(bakery.donuts, fillings);	// Without any way to check java throws exception
		    else if (i >= 20) bakery.checkQuantityCondition(bakery.donuts, fillings);

		    long t1 = System.nanoTime();
		    times.add((double)(t1 - t0) / 1_000_000);
		}
		
//		System.out.println(new EmptyDonut(32, fillings));
		

		System.out.println(times.subList(0, 10));
		System.out.println(times.subList(10, 20));
		System.out.println(times.subList(20, 30));
		System.out.println("End of program");
	}
}
