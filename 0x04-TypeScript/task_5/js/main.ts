export interface MajorCredits {
  credits: number;
  brand: 'MajorCredits';
}

// Define the MinorCredits interface
export interface MinorCredits {
  credits: number;
  brand: 'MinorCredits';
}

// Function to sum MajorCredits using arrow function
export const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): MajorCredits => ({
  credits: subject1.credits + subject2.credits,
  brand: 'MajorCredits'
} as MajorCredits);

// Function to sum MinorCredits using arrow function
export const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): MinorCredits => ({
  credits: subject1.credits + subject2.credits,
  brand: 'MinorCredits'
} as MinorCredits);
