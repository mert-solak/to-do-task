export interface Props {
  task: {
    _id: string;
    name: string;
    userName: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    finishesAt?: string;
    description?: string;
  };
}
