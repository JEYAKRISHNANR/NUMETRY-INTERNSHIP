import java.util.ArrayList;
import java.util.List;

public class University {
    private String name;
    private List<Department> departments;

    public University(String name) {
        this.name = name;
        this.departments = new ArrayList<>();
    }

    public void addDepartment(String name) {
        departments.add(new Department(name));
    }

    public void displayDepartments() {
        System.out.println("Departments in " + name + ":");
        for (Department department : departments) {
            System.out.println(department.name);
            department.displayStudents();
        }
    }

    // Department Inner Class
    public class Department {
        private String name;
        private List<Student> students;

        public Department(String name) {
            this.name = name;
            this.students = new ArrayList<>();
        }

        public void addStudent(String name) {
            students.add(new Student(name));
        }

        public void displayStudents() {
            System.out.println("Students in " + name + " department:");
            for (Student student : students) {
                System.out.println(student.name);
            }
        }

        // Student Inner Class
        public class Student {
            private String name;

            public Student(String name) {
                this.name = name;
            }
        }
    }

    public static void main(String[] args) {
        University university = new University("ABC University");
        
        // Add departments
        university.addDepartment("Computer Science");
        university.addDepartment("Physics");
        
        // Add students to departments
        University.Department compDept = university.new Department("Computer Science");
        compDept.addStudent("Alice");
        compDept.addStudent("Bob");

        University.Department physDept = university.new Department("Physics");
        physDept.addStudent("Charlie");
        physDept.addStudent("David");

        // Display departments and students
        university.displayDepartments();
    }
}
