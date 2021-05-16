export interface Task {
  _id: string;
  name: string;
  userName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  finishesAt?: string;
  description?: string;
}
