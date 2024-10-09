interface DirectorInterface {
  workFromHome():string;
  getCoffeeBreak():string;
  workDirectorTasks():string;
}


interface TeacherInterface {
  workFromHome():string;
  getCoffeeBreak():string;
  workTeacherTasks():string;
}


class Director implements DirectorInterface{
  workFromHome = ():string => "Working from home";
  getCoffeeBreak = ():string => "Getting a coffee break";
  workDirectorTasks = ():string => "Getting to director tasks";
}

class Teacher implements TeacherInterface {
    getCoffeeBreak = (): string => "Cannot have a break";
    workFromHome = (): string => "Cannot work from home";
    workTeacherTasks = (): string => "Getting to work";
}

function createEmployee(salary: number | string): Teacher | Director {
  return Number(salary) < 500 ? new Teacher() : new Director();
}


function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: DirectorInterface | TeacherInterface) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

type Subjects = "Math" | "History";


function teachClass(todayClass: Subjects): string{
  if(todayClass === "Math"){
    return "Teaching Math";
  }
  else{
    return "Teaching History";
  }
}

console.log(executeWork(createEmployee(200)));   // Output: "Getting to work"
console.log(executeWork(createEmployee(1000)));  // Output: "Getting to director tasks"

console.log(teachClass('Math'));    // Output: "Teaching Math"
console.log(teachClass('History')); // Output: "Teaching History"


