package threading;
import java.util.*;
class multithreading  extends Thread{
	public void run() {
		try {
            // Displaying the thread that is running
            System.out.println(
                "Thread " + Thread.currentThread().getId()
                + " is running");
        }
        catch (Exception e) {
            // Throwing an exception
            System.out.println("Exception is caught");
        }
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int n = 8; // Number of threads
        for (int i = 0; i < n; i++) {
             
             multithreading object = new multithreading();
            object.start();
		

	}

}
}
