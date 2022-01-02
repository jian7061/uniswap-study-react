import { Dialog } from '../common';
import { useDialog } from '../../hooks';
import { DialogContext } from '../../contexts/DialogContext';
import React from 'react';

export const DialogProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { dialog, handleDialog, dialogContent } = useDialog();

  return (
    <DialogContext.Provider value={{ dialog, handleDialog, dialogContent }}>
      <Dialog />
      {children}
    </DialogContext.Provider>
  );
};
