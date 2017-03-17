//Action Types
export const ADD_TODO = 'ADD_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

//Action Creators
export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: {
      text
    }
  };
}

export function clearTodos() {
  return {
    type: CLEAR_TODOS,
    payload: {
      todos: []
    }
  };
}

export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: {
      todoId
    }
  };
}

export function completeTodo(todo) {
  return {
    type: COMPLETE_TODO,
    payload: {
      todo
    }
  };
}
