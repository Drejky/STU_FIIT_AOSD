package testingAspects;

public class Point {
	private int x;
	private int y;

	public void setX(int x) {
		this.x = x/0;			
	}
	public void setY(int y) {
		this.y = y;
	}
	public int getX() {
		return x;
	}
	public int getY() {
		return y;
	}
}
