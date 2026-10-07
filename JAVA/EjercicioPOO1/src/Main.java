import com.school.model.Course;
import com.school.model.Student;

public class Main {
    public static void main(String[] args) {
        // Creación de objetos Student probando los distintos constructores
        Student estudiante1 = new Student("Manuel", "Rodriguez", 1001, 85, 1);
        Student estudiante2 = new Student("Ana", "Gómez", 1002, 55, 1);
        Student estudiante3 = new Student("Carlos", "López", 1003, 92, 1);
        Student estudiante4 = new Student("Maria", "Martínez", 1004, 70, 1);

        // Prueba de métodos individuales de Student
        System.out.println("======= Prueba de Métodos de Estudiante ==========");
        estudiante1.printFullName();
        System.out.println("¿Está aprobado " + estudiante1.nombre + "? " + estudiante1.isApproved());
        estudiante1.changeYearIfApproved();
        estudiante2.changeYearIfApproved();
        System.out.println();

        // Creación del curso
        Course cursoJava = new Course("Desarrollador Java Full Stack", "Prof. Fernando Aguilar Cano", 2026);

        // Prueba del metodo enroll individual
        System.out.println("======= Prueba de Inscripción ==========");
        cursoJava.enroll(estudiante1);

        // Prueba del metodo enroll sobrecargado (arreglo de estudiantes)
        Student[] grupo = {estudiante2, estudiante3, estudiante4};
        cursoJava.enroll(grupo);

        // Conteo e información del curso
        System.out.println("\nTotal de estudiantes inscritos: " + cursoJava.countStudents());
        System.out.println("Mejor calificación en el curso: " + cursoJava.bestGrade());
        System.out.println("===========================================================");
        // Prueba del metodo unEnroll
        System.out.println("\n===== Prueba de Baja de Estudiante ======");
        cursoJava.unEnroll(estudiante2);
        System.out.println("Total de estudiantes inscritos después de la baja: " + cursoJava.countStudents());

        // Pruebas de los retos adicionales (Challenges)
        System.out.println("\n========== Prueba de Retos ===========");
        System.out.printf("Promedio del curso: %.2f\n", cursoJava.calcularPromedio());
        cursoJava.mostrarRanking();
        cursoJava.mostrarEstudiantesSobrePromedio();
        System.out.println("=======================================================================");

    }//static main
}//class Main