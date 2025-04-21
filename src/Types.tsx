export interface Task {
  id: number;
  title: string;
  completed: boolean;
}
export interface TaskState {
  tasks: Task[];
  filter: "all" | "completed" | "pending";
  status: any;
}
