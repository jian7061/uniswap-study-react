import { createContext } from 'react';

export interface Props {
  dialog: boolean;
  handleDialog: (contents) => void;
  dialogContent: string;
}

// 모든 Dialog가 공유할 데이터
export const DialogContext = createContext<Props>({
  dialog: false,
  handleDialog: () => {
    return;
  },
  dialogContent: '',
});
