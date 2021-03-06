export type UserName = string;

export type SetUserName = (listener: (userName: UserName) => void) => void;
export type RequestUserName = () => void;
