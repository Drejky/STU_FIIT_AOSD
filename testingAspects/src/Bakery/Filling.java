package Bakery;

public class Filling {
	private String thickness;
	private String flavour;
	
	public Filling(String thickness, String flavour) {
		this.thickness = thickness;
		this.flavour = flavour;
	}

	public String getThickness() {
		return thickness;
	}

	public void setThickness(String thickness) {
		this.thickness = thickness;
	}

	public String getFlavour() {
		return flavour;
	}

	public void setFlavour(String flavour) {
		this.flavour = flavour;
	}
}
