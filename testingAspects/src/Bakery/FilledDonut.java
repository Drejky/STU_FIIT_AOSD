package Bakery;

import java.util.ArrayList;

public class FilledDonut extends EmptyDonut {
	private Filling filling;
	public FilledDonut(ArrayList<Filling> fillings) {
		super(5, fillings);
		this.setFilling(fillings.remove(0));
	}
	
	public Filling getFilling() {
		return this.filling;
	}

	@Override
	public void setFilling(Filling filling) {
		this.filling = filling;
	}
	
	@Override
	public void showDescription() {
		System.out.println("This is a "+ this.getWidth() + "cm wide donut and "+ this.getFilling()+" filling");
	}
}
