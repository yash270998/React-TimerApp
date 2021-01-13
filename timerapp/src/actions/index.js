import {ADD_TASK, EDIT_TASK, DELETE_TASK, CLEAR_TASKS} from './types';

export const addTask = (task) => {
  return {type: ADD_TASK, payload: task}
}

export const editTask = (task) => {
  return {type: EDIT_TASK, payload: task}
}

export const deleteTask = (task) => {
  return {type: DELETE_TASK, payload: task}
}

export const clearAllTasks = () => {
  return {type: CLEAR_TASKS}
}