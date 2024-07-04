/// <reference path="Subject.ts" />

namespace Subjects {
  // Declaration merging to add experienceTeachingReact to Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements = (): string => 'Here is the list of requirements for React';

    getAvailableTeacher = (): string => {
      if (this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    };
  }

  // Exporting the React class as a constant
  export const react = new React();
}
