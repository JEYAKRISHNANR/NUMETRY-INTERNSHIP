package threading;

public class threadcommunication {
	
	private String message;
	public synchronized String getMsg() {
		return message;
	}
    public synchronized void setMsg(String message) {
    	this.message=message;
    	notify();
    }
    public static void main(String[] args) {
        threadcommunication message = new threadcommunication();
        
        Runnable messageWriter = () -> {
            String[] messages = {"Message 1", "Message 2", "Message 3"};
            for (String msg : messages) {
                message.setMsg(msg);
                try {
                    Thread.sleep(2000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        };
        
        Runnable messageReader = () -> {
            while (true) {
                String msg = message.getMsg();
                System.out.println("Message received: " + msg);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        };
        
        Thread writerThread = new Thread(messageWriter);
        Thread readerThread = new Thread(messageReader);
        readerThread.start();
        writerThread.start();
    }
    
}
