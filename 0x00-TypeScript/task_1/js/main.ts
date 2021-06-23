interface Teacher {
  readonly firstName: string;
  readonly lastName: string; 
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [propName: string]: any;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

//Extending the Teacher class

interface Directors extends Teacher {
  numberOfReports: number;
}


interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction;

printTeacher = function(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)} ${lastName}`
}
