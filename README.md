# Repositorio: Ejercicios y Proyectos

Este repositorio contiene la recopilación organizada de ejercicios, prácticas de código y proyectos desarrollados a lo largo del programa intensivo de desarrollo full stack en Generation. El objetivo principal de este proyecto es estructurar el aprendizaje en desarrollo backend con Java y desarrollo frontend/scripting con JavaScript.

---

## Tabla de Contenidos

1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Módulos y Tecnologías](#módulos-y-tecnologías)
3. [Detalle de Ejercicios por Lenguaje](#detalle-de-ejercicios-por-lenguaje)
   - [Sección Java](#sección-java)
   - [Sección JavaScript](#sección-javascript)
4. [Requisitos Previos](#requisitos-previos)
5. [Instrucciones de Instalación y Ejecución](#instrucciones-de-instalación-y-ejecución)
   - [Proyectos Java](#proyectos-java)
   - [Proyectos JavaScript y Pruebas Unitarias](#proyectos-javascript-y-pruebas-unitarias)
6. [Gestión de Archivos e Ignorados (.gitignore)](#gestión-de-archivos-e-ignorados-gitignore)
7. [Créditos y Autor](#créditos-y-autor)

---

## Estructura del Proyecto

```text
EJERCICIOS/
├── JAVA/
│   └── EjercicioPOO1/
│       ├── .gitignore
│       ├── EjercicioPOO1.iml
│       └── src/
│           ├── Main.java
│           └── com/school/model/
│               ├── Course.java
│               └── Student.java
└── JS/
    ├── DesarrolloWeb/        
    ├── MODULOS/              
    ├── Mini-Ejercicios/     
    ├── POO/                  
    └── ejercicio-jest/      
```

---

## Módulos y Tecnologías

### Lenguaje de Programación
* **Java 21+:** Lenguaje orientado a objetos utilizado para estructurar modelos de datos, lógica de negocio y arquitectura backend.
* **JavaScript:** Lenguaje de programación dinámico utilizado para manipulación del DOM, modularización de código y algoritmos.

### Entornos de Ejecución y Herramientas
* **Node.js (v18.x o superior):** Entorno de ejecución para JavaScript fuera del navegador.
* **Jest:** Framework de testing enfocado en pruebas unitarias para validar la integridad de funciones de JavaScript.
* **Git & GitHub:** Sistema de control de versiones distribuido para la trazabilidad y sincronización del código.

---

## Detalle de Ejercicios por Lenguaje

### Sección Java

#### EjercicioPOO1
* **Ubicación:** `JAVA/EjercicioPOO1/`
* **Descripción:** Implementación de conceptos fundamentales de Programación Orientada a Objetos (POO).
* **Conceptos clave:**
  - Encapsulamiento de atributos con especificadores de acceso privados y métodos accesores (`getters` / `setters`).
  - Abstracción de entidades del dominio escolar (`Student`, `Course`).
  - Modularización mediante paquetes (`com.school.model`).
  - Instanciación y orquestación de objetos desde la clase ejecutable `Main`.

### Sección JavaScript

#### 1. DesarrolloWeb
* **Ubicación:** `JS/DesarrolloWeb/`
* **Descripción:** Ejercicios enfocados en la interacción entre JavaScript y el navegador mediante el DOM (Document Object Model), manejo de eventos de usuario y manipulación dinámica de elementos HTML/CSS.

#### 2. MODULOS
* **Ubicación:** `JS/MODULOS/`
* **Descripción:** Prácticas de organización de código desacoplado utilizando la sintaxis moderna de módulos de ECMAScript (`import` / `export`).

#### 3. Mini-Ejercicios
* **Ubicación:** `JS/Mini-Ejercicios/`
* **Descripción:** Resolución de problemas palindromo y vocales

#### 4. POO
* **Ubicación:** `JS/POO/`
* **Descripción:** Modelado de objetos en JavaScript mediante clases, constructores, prototipos y herencia.

#### 5. ejercicio-jest
* **Ubicación:** `JS/ejercicio-jest/`
* **Descripción:** Suite de pruebas unitarias automatizadas utilizando Jest para validar el comportamiento esperado en funciones lógicas y de transformación de datos.

---

## Requisitos Previos

Antes de ejecutar los proyectos en tu entorno local, asegúrate de contar con las siguientes herramientas instaladas:

1. **Java Development Kit (JDK):** Versión 21 o superior.
2. **Node.js:** `npm` (Node Package Manager).
3. **Entorno de Desarrollo (IDE):** Visual Studio Code, IntelliJ IDEA.
4. **Git:** Cliente de línea de comandos para control de versiones.

---

## Instrucciones de Instalación y Ejecución

### Proyectos Java

1. Accede al directorio del proyecto Java:
   ```bash
   cd JAVA/EjercicioPOO1
   ```
2. Compila el código fuente desde la terminal:
   ```bash
   javac -d bin src/Main.java src/com/school/model/*.java
   ```
3. Ejecuta la clase principal:
   ```bash
   java -cp bin Main
   ```

*(Nota: También puedes abrir la carpeta `JAVA/EjercicioPOO1` directamente en IntelliJ IDEA o VS Code y ejecutar `Main.java` desde la interfaz gráfica).*

### Proyectos JavaScript y Pruebas Unitarias

1. Navega hasta el directorio del módulo de pruebas unitarias:
   ```bash
   cd JS/ejercicio-jest
   ```
2. Instala las dependencias declaradas en el archivo `package.json`:
   ```bash
   npm install
   ```
3. Ejecuta la suite de pruebas unitarias con Jest:
   ```bash
   npm test
   ```

---

## Gestión de Archivos e Ignorados (.gitignore)

Para mantener el repositorio limpio y evitar subir archivos generados por el entorno de desarrollo o gestores de paquetes, el archivo `.gitignore` raíz debe incluir las siguientes exclusiones:

```text
# Archivos de configuración de IDEs
.idea/
*.iml
.vscode/

# Dependencias de Node.js
node_modules/
npm-debug.log

# Archivos de compilación de Java
*.class
bin/
out/
```

---

## Créditos y Autor

* **Autor:** Estudiante de Generation México: Manuel Rodríguez González
* **Institución:** Generation México.
* **Licencia:** Proyecto educativo desarrollado con fines de aprendizaje e integración técnica.