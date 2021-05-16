import moment from 'moment';
import React, { DragEventHandler, useState } from 'react';

import { Popup, TaskForm } from '../index';
import { Props } from './Task.config';
import { momentHelper } from '../../helpers';
import { taskDefinitions } from '../../definitions';

import styles from './Task.module.scss';

export const Task: React.FC<Props> = ({ task, userName }) => {
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);

  const setStatusDotClass = (finishesAt: taskDefinitions.Task['finishesAt'] | undefined) => {
    if (!finishesAt) {
      return styles.statusDot;
    }

    const dayLeft = moment(finishesAt).diff(moment(), 'days');

    if (dayLeft <= 0) {
      return `${styles.statusDot} ${styles.makeRed}`;
    }

    if (dayLeft < 3) {
      return `${styles.statusDot} ${styles.makeOrange}`;
    }

    return `${styles.statusDot} ${styles.makeBlue}`;
  };

  const setUserNameWrapperClass = () => {
    if (task.userName === userName) {
      return `${styles.userNameWrapper} ${styles.makeBorderGreen}`;
    }

    return styles.userNameWrapper;
  };

  const setContainerClass = () => {
    if (task.userName === userName) {
      return `${styles.container} ${styles.makeCursorPointer}`;
    }

    return styles.container;
  };

  const handleOnDragStart: DragEventHandler<HTMLDivElement> = (event) => {
    event.dataTransfer.setData('text/plain', task._id);
  };

  const handleOnClickTask = () => {
    if (task.userName === userName) {
      setIsTaskFormOpen(true);
    }
  };

  const handleOnCreateUpdateFinish = () => {
    setIsTaskFormOpen(false);
  };

  return (
    <div>
      <div
        className={setContainerClass()}
        role="button"
        tabIndex={-1}
        onKeyDown={handleOnClickTask}
        onClick={handleOnClickTask}
        onDragStart={handleOnDragStart}
        draggable={task.userName === userName}
      >
        <div className={styles.left}>
          <div className={setStatusDotClass(task.finishesAt)} />
        </div>
        <div className={styles.middle}>
          <p className={styles.name}>{task.name}</p>
          {task.finishesAt && <p className={styles.date}>{momentHelper.formatStringDate(task.finishesAt)}</p>}
        </div>
        <div className={styles.right}>
          <div className={setUserNameWrapperClass()}>
            <p className={styles.userName}>{task.userName.charAt(0)}</p>
          </div>
        </div>
      </div>
      <Popup isDialogOpen={isTaskFormOpen} onDialogClose={setIsTaskFormOpen} title="Update Task">
        <TaskForm
          task={task}
          userName={userName}
          status={task.status}
          onCreateUpdateFinish={handleOnCreateUpdateFinish}
        />
      </Popup>
    </div>
  );
};
