package exception;

import java.io.File;
import java.io.FileInputStream;
import java.util.*;

public class exception {

	public static void main(String[] args) {
		int a=5;
		int b=0;
		//ArithmeticException
		try {
			int c=a/b;
			System.out.println(c);
			
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e);
		//	System.out.println(e.toString());
		}
		//NullPointerException
		String s=null;
		try {
			System.out.println(s.length());
		} catch (Exception e) {
			// TODO: handle exception
           System.out.println(e);
		}
		//ArrayIndexOutOfBoundsException
		int arr[]= {10,30};
		try {
			int n=arr[5];
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e);
		}
		//FileNotFoundException
		try {
			File file=new File("hello.txt");
			  FileInputStream fis = new FileInputStream(file); 
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e);
		}

	}

}
