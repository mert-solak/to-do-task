import React from 'react';

import { Dialog, DialogTitle } from '@material-ui/core';

import { Props } from './Popup.config';

import styles from './Popup.module.scss';

export const Popup: React.FC<Props> = ({ isDialogOpen, onDialogClose, title, children }) => (
  <Dialog maxWidth="xl" onClose={() => onDialogClose(false)} open={isDialogOpen}>
    <DialogTitle className={styles.title}>{title}</DialogTitle>
    {children}
  </Dialog>
);
