/**
 * Practice Exercise 5: School OOP System
 *
 * - Person (base): name, age, greet()
 * - Student (extends Person): studentId, courses[], enroll(course), getGPA()
 * - Teacher (extends Person): employeeId, subjects[], assignGrade(student, course, grade)
 * - Course: name, code, credits, teacher, students[]
 *
 * Demonstrate: Encapsulation (private grades, validated setters), Abstraction (hide GPA calc),
 * Inheritance (Student/Teacher extend Person), Polymorphism (describe() different per type)
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }

  describe() {
    return `Person: ${this.name}, ${this.age} years old`;
  }
}

class Course {
  constructor(name, code, credits, teacher) {
    this.name = name;
    this.code = code;
    this.credits = credits;
    this.teacher = teacher;
    this.students = [];
  }
}

class Student extends Person {
  #grades = {}; // private: courseCode -> grade

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    this.courses = [];
  }

  enroll(course) {
    if (!this.courses.includes(course)) {
      this.courses.push(course);
      course.students.push(this);
    }
  }

  getGPA() {
    const entries = Object.entries(this.#grades);
    if (entries.length === 0) return 0;
    const sum = entries.reduce((s, [, g]) => s + g, 0);
    return (sum / entries.length).toFixed(2);
  }

  receiveGrade(courseCode, grade) {
    if (grade < 0 || grade > 100) {
      throw new Error('Grade must be between 0 and 100');
    }
    this.#grades[courseCode] = grade;
  }

  describe() {
    return `Student: ${this.name}, ID: ${this.studentId}, GPA: ${this.getGPA()}`;
  }
}

class Teacher extends Person {
  constructor(name, age, employeeId) {
    super(name, age);
    this.employeeId = employeeId;
    this.subjects = [];
  }

  assignGrade(student, course, grade) {
    if (!(student instanceof Student)) throw new Error('First arg must be a Student');
    student.receiveGrade(course.code, grade);
    console.log(`${this.name} assigned grade ${grade} to ${student.name} for ${course.name}`);
  }

  describe() {
    return `Teacher: ${this.name}, Employee ID: ${this.employeeId}, Subjects: ${this.subjects.join(', ') || 'none'}`;
  }
}

const teacher = new Teacher('Dr. Smith', 45, 'T001');
teacher.subjects = ['Math', 'CS'];

const course = new Course('Intro to CS', 'CS101', 3, teacher);
const alice = new Student('Alice', 20, 'S001');
alice.enroll(course);

teacher.assignGrade(alice, course, 85);
alice.enroll(course);
teacher.assignGrade(alice, course, 90);

console.log(alice.greet());
console.log(alice.describe());
console.log(teacher.describe());
console.log('Alice GPA:', alice.getGPA());
