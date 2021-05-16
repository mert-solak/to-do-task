interface Task {
  _id: string;
  name: string;
  userName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  finishesAt?: string;
  description?: string;
}

export interface Props {
  task?: Task;
  userName: string;
  status: string;
  onCreateUpdateFinish?: () => {};
}
