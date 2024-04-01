package dsa;
import java.util.*;

public class linkedlist {
    public static void main(String[] args) {
        LinkedList<String> linkedList = new LinkedList<>();
        linkedList.add("Apple");
        linkedList.add("Banana");
        linkedList.add("Orange");
        System.out.println("LinkedList: " + linkedList);
        linkedList.addFirst("Grapes");
        linkedList.addLast("Mango");
        System.out.println("Modified LinkedList: " + linkedList);
        String firstElement = linkedList.removeFirst();
        System.out.println("Removed First Element: " + firstElement);
        String lastElement = linkedList.removeLast();
        System.out.println("Removed Last Element: " + lastElement);
        System.out.println("Final LinkedList: " + linkedList);
    }
}
