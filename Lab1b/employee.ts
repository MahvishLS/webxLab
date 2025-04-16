interface Employee {
    name: string;
    id: number;
    role: string; 
    getDetails(): string;
  }
  class Manager implements Employee {
    name: string;
    id: number;
    role: string;
    department: string;

    constructor(name: string, id: number, role: string, department: string) {
      this.name = name;
      this.id = id;
      this.role = role;
      this.department = department;
    }
  
  
    getDetails(): string {
      return `${this.name} (ID: ${this.id}) is a ${this.role} in the ${this.department} department.`;
    }
  }
  
  
  class Developer implements Employee {
    name: string;
    id: number;
    role: string;
    programmingLanguages: string[];
  
  
    constructor(name: string, id: number, role: string, programmingLanguages: string[]) {
      this.name = name;
      this.id = id;
      this.role = role;
      this.programmingLanguages = programmingLanguages;
    }
  
  
    getDetails(): string {
      return `${this.name} (ID: ${this.id}) is a ${this.role} proficient in ${this.programmingLanguages.join(", ")}.`;
    }
  }
  
  
  const manager1 = new Manager("Shravani Rasam", 101, "Manager", "Sales");
  
  
  const developer1 = new Developer("Priya Rawat", 102, "Developer", ["JavaScript", "TypeScript", "Node.js"]);
  
  
  console.log(manager1.getDetails());
  console.log(developer1.getDetails());
          
  