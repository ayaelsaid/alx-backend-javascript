/// <reference path="Subject.ts" />

namespace Subjects {
  // Declaration merging to add experienceTeachingJava to Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements = (): string => 'Here is the list of requirements for Java';

    getAvailableTeacher = (): string => {
      if (this.teacher.experienceTeachingJava) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    };
  }

  // Exporting the Java class as a constant
  export const java = new Java();
}
