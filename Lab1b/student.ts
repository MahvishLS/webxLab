class Student {
    name: string;
    studentId: string;
    grade: string;
  
    constructor(name: string, studentId: string, grade: string) {
      this.name = name;
      this.studentId = studentId;
      this.grade = grade;
    }
    getDetails(): void {
      console.log(`Student Name: ${this.name}`);
      console.log(`Student ID: ${this.studentId}`);
      console.log(`Grade: ${this.grade}`);
    }
  }
  
  class GraduateStudent extends Student {
    thesisTopic: string;
    constructor(name: string, studentId: string, grade: string, thesisTopic: string) {
      super(name, studentId, grade); // Call the parent constructor
      this.thesisTopic = thesisTopic;
    }
  
    getDetails(): void {
      super.getDetails();
      console.log(`Thesis Topic: ${this.thesisTopic}`);
    }
  
    getThesisTopic(): void {
      console.log(`Thesis Topic: ${this.thesisTopic}`);
    }
  }
  
  class LibraryAccount {
    accountId: string;
    booksIssued: number;
  
    constructor(accountId: string, booksIssued: number) {
      this.accountId = accountId;
      this.booksIssued = booksIssued;
    }
    getLibraryInfo(): void {
      console.log(`Library Account ID: ${this.accountId}`);
      console.log(`Books Issued: ${this.booksIssued}`);
    }
  }
  class StudentWithLibrary {
    student: Student;
    libraryAccount: LibraryAccount;
  
    constructor(student: Student, libraryAccount: LibraryAccount) {
      this.student = student;
      this.libraryAccount = libraryAccount;
    }
  
    displayAllDetails(): void {
      this.student.getDetails();
      this.libraryAccount.getLibraryInfo();
    }
  }
  
  const student1 = new Student("Mahvish Siddiqui", "D15A56", "A");
  student1.getDetails();
  
  const gradStudent1 = new GraduateStudent("Shreya Sawawnt", "D!%A53", "B", "Artificial Intelligence");
  gradStudent1.getDetails();
  
  const libraryAccount1 = new LibraryAccount("LA1001", 3);
  libraryAccount1.getLibraryInfo();
  
  const studentWithLibrary = new StudentWithLibrary(student1, libraryAccount1);
  studentWithLibrary.displayAllDetails();
  