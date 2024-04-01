package fileio;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class readfromfile {
	 public static void main(String[] args) {
	        try (BufferedReader reader = new BufferedReader(new FileReader("D:\\jey.txt"))) {
	            String line;
	            while ((line = reader.readLine()) != null) {
	                System.out.println(line);
	            }
	        } catch (IOException e) {
	            e.printStackTrace();
	        }

}
}
