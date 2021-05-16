import React, { ChangeEventHandler, useState } from 'react';
import moment from 'moment';

import { TextField, Button } from '@material-ui/core';
import { useAxios } from '@mertsolak/axios-helper';
import { useDispatch } from 'react-redux';

import { Props } from './TaskForm.config';
import { taskService } from '../../services';
import { taskActions } from '../../redux/actions';
import { axiosConfig } from '../../configs';
import { errorLocale } from '../../locales';

import styles from './TaskForm.module.scss';

export const TaskForm: React.FC<Props> = ({ task: taskProp, userName, status, onCreateUpdateFinish }) => {
  const [task, setTask] = useState<Partial<Props['task']>>(taskProp);

  const axios = useAxios();
  const dispatch = useDispatch();

  const handleOnNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (task) {
      return setTask({ ...task, name: event.target.value });
    }

    return setTask({ name: event.target.value });
  };

  const handleOnDescriptionChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (task) {
      return setTask({ ...task, description: event.target.value });
    }

    return setTask({ description: event.target.value });
  };

  const handleOnDateChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (task) {
      return setTask({ ...task, finishesAt: moment(event.target.value).format() });
    }

    return setTask({ finishesAt: moment(event.target.value).format() });
  };

  const handleOnClickCreateUpdate = async () => {
    if (taskProp && task) {
      try {
        const { data } = await taskService.updateTask(axios, { ...taskProp, ...task });

        dispatch(taskActions.updateTask(data));

        if (onCreateUpdateFinish) {
          onCreateUpdateFinish();
        }
      } catch (error) {
        if (!error?.config?.handled) {
          axiosConfig.errorHandler(errorLocale.errorMessages.UNHANDLED_ERROR);
        }
      }
    } else if (task && task.name) {
      try {
        const { data } = await taskService.CreateTask(axios, { ...task, name: task.name, userName, status });

        dispatch(taskActions.addTask(data));

        if (onCreateUpdateFinish) {
          onCreateUpdateFinish();
        }
      } catch (error) {
        if (!error?.config?.handled) {
          axiosConfig.errorHandler(errorLocale.errorMessages.UNHANDLED_ERROR);
        }
      }
    } else {
      axiosConfig.errorHandler(errorLocale.errorMessages.VALIDATION_ERROR);
    }
  };

  const setDefaultFinishesAt = (finishesAt?: string) => {
    if (finishesAt) {
      return moment(finishesAt).format('YYYY-MM-DD');
    }

    return '';
  };

  const handleOnClickDeleteButton = async () => {
    if (taskProp) {
      try {
        const { data } = await taskService.deleteTask(axios, { _id: taskProp._id });

        if (onCreateUpdateFinish) {
          onCreateUpdateFinish();
        }

        dispatch(taskActions.removeTask(data._id));
      } catch (error) {
        if (!error?.config?.handled) {
          axiosConfig.errorHandler(errorLocale.errorMessages.UNHANDLED_ERROR);
        }
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <TextField
          className={styles.textField}
          onChange={handleOnNameChange}
          defaultValue={taskProp?.name}
          label="Name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          className={styles.textField}
          onChange={handleOnDescriptionChange}
          defaultValue={taskProp?.description}
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />
        <TextField
          className={styles.textField}
          onChange={handleOnDateChange}
          defaultValue={setDefaultFinishesAt(taskProp?.finishesAt)}
          label="Deadline"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
      </div>
      <div className={styles.buttons}>
        <Button className={styles.addMarginToButton} onClick={onCreateUpdateFinish} variant="outlined">
          Cancel
        </Button>

        {taskProp && (
          <Button
            className={styles.addMarginToButton}
            onClick={handleOnClickDeleteButton}
            variant="outlined"
            color="secondary"
          >
            Delete
          </Button>
        )}

        <Button onClick={handleOnClickCreateUpdate} variant="contained" color="primary">
          {taskProp ? 'Update' : 'Create'}
        </Button>
      </div>
    </div>
  );
};
