export interface Task {
  id: string;
  name: string;
  userName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  finishesAt?: string;
  description?: string;
}
