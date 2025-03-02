import { Student } from './student';

export interface Classroom {
  id: string;
  name: string;
  code: string;
  link: string;
  maxStudents: number;
  students: Student[];
  nonAnonymousStudentsAmount: number;
}
