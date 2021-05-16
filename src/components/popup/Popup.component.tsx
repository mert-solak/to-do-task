import React from 'react';

import { Dialog, DialogTitle } from '@material-ui/core';

import { Props } from './Popup.config';

export const Popup: React.FC<Props> = ({ isDialogOpen, onDialogClose, title, children }) => (
  <Dialog onClose={onDialogClose} open={isDialogOpen}>
    <DialogTitle>{title}</DialogTitle>
    {children}
  </Dialog>
);
