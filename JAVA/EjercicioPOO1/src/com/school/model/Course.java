package com.school.model;

import java.util.ArrayList;
import java.util.List;

public class Course {
    // Atributos del curso
    public String nombreCurso;
    public String nombreProfesor;
    public int anio;
    // Colección de estudiantes inscritos
    public List<Student> estudiantes;

    // Constructor de la clase Course
    public Course(String nombreCurso, String nombreProfesor, int anio) {
        this.nombreCurso = nombreCurso;
        this.nombreProfesor = nombreProfesor;
        this.anio = anio;
        this.estudiantes = new ArrayList<>();
    }//contructor Course

    // Inscribir a un solo estudiante
    public void enroll(Student estudiante) {
        if (estudiante != null && !this.estudiantes.contains(estudiante)) {
            this.estudiantes.add(estudiante);
            System.out.println("El/La estudiante " + estudiante.nombre + " fue inscrito exitosamente en el curso: " + this.nombreCurso);
        }//if
    }// enrroll

    // Sobrecarga del metodo enroll: Inscribir un arreglo de estudiantes
    public void enroll(Student[] estudiantes) {
        if (estudiantes != null) {
            for (Student e : estudiantes) {
                enroll(e); // Reutilizamos el metodo de inscripción individual
            }//for
        }//if
    }//enrrol array

    // Dar de baja a un estudiante verificando su existencia
    public void unEnroll(Student estudiante) {
        if (estudiante != null && this.estudiantes.contains(estudiante)) {
            this.estudiantes.remove(estudiante);
            System.out.println(estudiante.nombre + " se ha dado de baja del curso: " + this.nombreCurso);
        } else {
            System.out.println("Estudiante no encontrado en este curso.");
        }//else
    }// unEnrroll

    // Contar el total de estudiantes inscritos
    public int countStudents() {
        return this.estudiantes.size();
    }// countStudents

    // Obtener la calificación más alta del curso
    public int bestGrade() {
        if (this.estudiantes.isEmpty()) {
            return 0;
        }//if

        int max = this.estudiantes.get(0).calificacion;
        for (Student e : this.estudiantes) {
            if (e.calificacion > max) {
                max = e.calificacion;
            }//if
        }//for
        return max;

    }// bestGrade

    // Reto 1: Calcular el promedio de calificaciones del curso
    public double calcularPromedio() {
        if (this.estudiantes.isEmpty()) {
            return 0.0;
        }//if
        double suma = 0;
        for (Student e : this.estudiantes) {
            suma += e.calificacion;
        }//for
        return suma / this.estudiantes.size();
    }// calcularPromedio

    // Reto 2: Mostrar el ranking de estudiantes ordenados por calificación de mayor a menor
    public void mostrarRanking() {
        System.out.println("\n=============== Ranking del Curso: " + this.nombreCurso + " =================");
        List<Student> listaOrdenada = new ArrayList<>(this.estudiantes);

        // Ordenamos la lista de mayor a menor según la calificación
        listaOrdenada.sort((e1, e2) -> Integer.compare(e2.calificacion, e1.calificacion));

        int posicion = 1;
        for (Student e : listaOrdenada) {
            System.out.println(posicion + ". " + e.nombre + " " + e.apellido + " - Calificación: " + e.calificacion);
            posicion++;

        }//for
    }//mostrarRankin

    // Reto 3: Mostrar si cada estudiante está por encima o por debajo del promedio del curso
    public void mostrarEstudiantesSobrePromedio() {
        double promedio = calcularPromedio();
        System.out.println("\n======== Rendimiento relativo al promedio del curso (" + String.format("%.2f", promedio) + ") ==========");

        for (Student e : this.estudiantes) {
            if (e.calificacion >= promedio) {
                System.out.println(e.nombre + " " + e.apellido + " (Calificación: " + e.calificacion + ") está POR ENCIMA O IGUAL al promedio.");
            } else {
                System.out.println(e.nombre + " " + e.apellido + " (Calificación: " + e.calificacion + ") está POR DEBAJO del promedio.");


            }//else
        }//for
    }//mostrarEstudiantesSobrePromedio
}// class Course