package threading;

public class runnable implements Runnable{
   
	public void run() {
		try {
			System.out.println("Thread "+Thread.currentThread().getId()+" is running");
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e);
		}
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int n=8;
		for(int i=0;i<n;i++) {
		Thread obj= new Thread(new runnable());
		obj.start();
		}

	}

}
