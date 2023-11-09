package Bakery;

public class Donut {
	private float width;
	private Filling filling;
	
	public Donut(float width, Filling filling) {
		this.width = width;
		this.filling = filling;
	}

	public float getWidth() {
		return width;
	}

	public void setWidth(float width) {
		this.width = width;
	}

	public Filling getFilling() {
		return filling;
	}

	public void setFilling(Filling filling) {
		this.filling = filling;
	}
}
