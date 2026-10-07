package com.school.model;

import java.util.Objects;

public class Student {
    // Atributos de la clase
    public String nombre;
    public String apellido;
    public int matricula;
    public int calificacion;
    public int anio;

    // Constructor 1: Recibe todos los atributos
    public Student(String nombre, String apellido, int matricula, int calificacion, int anio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
        this.calificacion = calificacion;
        this.anio = anio;
    }// constructor

    // Constructor 2: Asigna año inicial 1 y calificación inicial 0 por defecto
    public Student(String nombre, String apellido, int matricula) {
        this(nombre, apellido, matricula, 0, 1);
    }// constructor 2

    // Constructor 3: Constructor por defecto (valores base)
    public Student() {
        this("Desconocido", "Desconocido", 0, 0, 1);
    }//constructor valores

    // Imprime el nombre completo del estudiante
    public void printFullName() {
        System.out.println(this.nombre + " " + this.apellido);
    }//printFullName

    // Retorna true si la calificación es mayor o igual a 60
    public boolean isApproved() {
        return this.calificacion >= 60;
    }//isApproved

    // Incrementa el año si el estudiante aprueba e imprime felicitación
    public int changeYearIfApproved() {
        if (isApproved()) {
            this.anio += 1;
            System.out.println("¡Felicidades " + this.nombre + "! Has sido aprobado al año " + this.anio);
        } else {
            System.out.println("El/La estudiante " + this.nombre + " no fue aprobado.");
        }//else
        return this.anio;
    } //changeYearIfApproved

    // Sobrescribimos equals y hashCode para identificar correctamente al estudiante por su matrícula
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return matricula == student.matricula;
    }// equals

    @Override
    public int hashCode() {
        return Objects.hash(matricula);
    }// hashCode
}//class Student