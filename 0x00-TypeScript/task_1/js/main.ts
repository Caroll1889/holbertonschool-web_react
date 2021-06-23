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
