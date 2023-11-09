package Bakery;

import java.util.ArrayList;

public class FilledDonut extends EmptyDonut {
	private Filling filling;
	public FilledDonut(float width, ArrayList<Filling> fillings) {
		super(width, fillings);
	}
	
	public Filling getFilling() {
		return this.getFilling();
	}

	@Override
	public void setFilling(Filling filling) {
		this.setFilling(filling);
	}
	
	@Override
	public void showDescription() {
		System.out.println("This is a "+ this.getWidth() + "cm wide donut and "+ this.getFilling()+" filling");
	}
}
