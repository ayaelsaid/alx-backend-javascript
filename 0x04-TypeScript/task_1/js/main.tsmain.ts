export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [prop: string]: any; // Allow any additional properties
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: PrintTeacherFunction = (firstName, lastName) => `${firstName.charAt(0)}. ${lastName}`;

export interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassI;
}

export interface StudentClassI {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentClassI {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework = (): string => 'Currently working';

  displayName = (): string => this._firstName;
}
