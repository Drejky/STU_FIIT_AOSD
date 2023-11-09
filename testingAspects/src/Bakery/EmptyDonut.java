package Bakery;

import java.util.ArrayList;

public class EmptyDonut {
	private float width;

	public EmptyDonut(float width, ArrayList<Filling> fillings) {
		this.width = width;
	}

	public float getWidth() {
		return width;
	}

	public void setWidth(float width) {
		this.width = width;
	}
	
	public void setFilling(Filling filling) {

	}
	
	public void showDescription() {
		System.out.println("This is a "+ this.width + "cm wide donut with no filling");
	}
}
