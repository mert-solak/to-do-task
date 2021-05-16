export interface Props {
  taskList: {
    _id: string;
    name: string;
    userName: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    finishesAt?: string;
    description?: string;
  }[];
  status: string;
  userName: string;
}
