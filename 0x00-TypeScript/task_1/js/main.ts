interface Teacher {
  firstName: string;
  lastName: string; 
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [propName: string]: any;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}
