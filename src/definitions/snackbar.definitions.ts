export type ErrorMessage = string;

export type SetErrorMessage = (listener: (errorMessage: ErrorMessage) => void) => void;
export type SendErrorMessage = (errorMessage: ErrorMessage) => void;
