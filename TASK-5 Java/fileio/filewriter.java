package fileio;
import java.io.FileWriter;
import java.io.IOException;

public class filewriter {
    public static void main(String[] args) {
        String filename = "D:\\output.txt";
        String data = "Hello, FileWriter!";try {
            FileWriter writer = new FileWriter(filename);
            writer.write(data);
            writer.close();
            
            System.out.println("Data has been written to the file successfully.");
        } catch (IOException e) {
            System.out.println("An error occurred while writing to the file: " + e.getMessage());
        }
    }
}
