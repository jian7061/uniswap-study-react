export * from './Button';
export * from './Logo';
export * from './BasicInput';
export * from './InputField';
export * from './Navbar';
export * from './Main';

export enum Status {
  Normal,
  Error,
  Success,
}

export type ERROR = [isError: boolean, ErrorMessage: string];

export interface Validation {
  (value: any): ERROR;
}