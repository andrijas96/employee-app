export interface Employee {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: number | undefined;
  dateOfBirth: Date | undefined;
  salary: number | undefined;
  tasksCompleted: number;
}
