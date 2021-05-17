## To-Do-Task (Remote)

React app developed as a remote of a micro-frontend architecture.

- Run npm start for both consumer and task apps and navigate to localhost:8080. ( It needs user name that is sent by the consumer app ).

```bash
npm start
```

- It has tasks related components/pages.
- ModuleFederationPlugin used for the architecture.
- Communication between apps provided with CustomEvents.
- Redux configuration added for this module.
- Communicates with backend.

## User Manual

- User needs to enter/pick a username to use to-do lists.
- User can only update the tasks that belongs to him.
- Only name is required for a task.
- There are 3 different colors for the deadlines.
  - red: -&#9854; to 1 day
  - orange: 1-3 days
  - blue: 3 to &#9854;
- Tasks can be drag and drop to update status.
- The letter in the right section of a task represents the first letter of a user name.
  - Green circle around the letter indicates that the task belongs to the current user and can be modified.
- Tasks can be modified by clicking on them.
- New tasks and statuses can be added infinitely.
