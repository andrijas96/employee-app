export interface Task {
  id: number;
  title: string;
  description: string;
  asignee: string;
  dueDate: Date;
  completed: boolean;
}
