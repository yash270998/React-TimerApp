import {ADD_TASK, EDIT_TASK, DELETE_TASK, CLEAR_TASKS} from '../actions/types';

export const initialState = {
  tasks: []
}

const defaultState = JSON.parse(localStorage.getItem('reduxState')) || initialState;


const tasks = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: state.tasks.length + 1,
        description: action.payload.description,
        time: action.payload.time,
        startTime: action.payload.startTime,
        projid: parseInt(action.payload.projid),
        timerState: false
      }
      return {
        ...state,
        tasks: state
          .tasks
          .concat(newTask)
      }
    case EDIT_TASK:
      var newTasks = [...state.tasks];
      var index = newTasks.findIndex(x => x.id === action.payload.id);

      if (index !== -1) {
        return {
          ...state,
          tasks: [
            ...newTasks.slice(0, index),
            Object.assign({}, newTasks[index], {
              time: action.payload.time,
              timerState: action.payload.timerState
            }),
            ...newTasks.slice(index + 1)
          ]
        }
      } else {
        return state;
      }
    case DELETE_TASK:
      var newTasks = [...state.tasks];
      var index = newTasks.findIndex(x => x.id === action.payload.id);
      if (index !== -1) {
        newTasks.splice(index, 1);
        return {

          ...state,
          tasks: newTasks
        }
      } else {
        return {
          ...state
        }
      }
    case CLEAR_TASKS:
      return {tasks: []};
    default:
      return state;
  }
}

export default tasks;