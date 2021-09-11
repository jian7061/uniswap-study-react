export * from './Button';
export * from './Logo';
export * from './Close';
export * from './BasicInput';
export * from './InputField';
export * from './Navbar';
export * from './Main';
export * from './Dialog';
export * from './Web3ReactManager';

export enum Status {
  Normal,
  Error,
  Success,
}

export type ERROR = [isError: boolean, ErrorMessage: string];

export interface Validation {
  (value: any): ERROR;
}