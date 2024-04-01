package dsa;

import java.util.Stack;

public class dsastack {
	 public static void main(String[] args)
	    {
		 Stack<Integer> stack = new Stack<Integer>();
	        stack.push(1);
	        stack.push(5);
	        stack.push(0);
	        stack.push(2);
	        stack.push(7);
	        System.out.println("Initial Stack: " + stack);
	        System.out.println("Popped element: " + stack.pop());
	        System.out.println("Popped element: " + stack.pop());
	        System.out.println("Stack after pop operation "+ stack);
	    }

}
