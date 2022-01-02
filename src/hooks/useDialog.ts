import { useState } from 'react';
import { Props } from '../contexts';

export function useDialog(): Props {
  const [dialog, setDialog] = useState<boolean>(false);
  const [dialogContent, setDialogContent] = useState<string>("I'm the Dialog Content");

  const handleDialog = (content = '') => {
    setDialog(!dialog);
    if (content) {
      setDialogContent(content);
    }
  };

  return { dialog, handleDialog, dialogContent };
}
