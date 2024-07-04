/// <reference path="Subject.ts" />

namespace Subjects {
  // Declaration merging to add experienceTeachingC to Teacher interface
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements = (): string => 'Here is the list of requirements for Cpp';

    getAvailableTeacher = (): string => {
      if (this.teacher.experienceTeachingC) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    };
  }

  // Exporting the Cpp class as a constant
  export const cpp = new Cpp();
}
