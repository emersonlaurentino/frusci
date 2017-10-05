import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import stubString from 'lodash/fp/stubString';
import flip from 'lodash/fp/flip';
import get from 'lodash/fp/get';
import actions from '~/store/actions';

export default combineReducers({
  todo: handleActions({
    [actions.todo.todoExampleSuccess]: flip(get('payload')),
    [actions.todo.todoExampleRequest]: stubString,
    [actions.todo.todoExampleError]: stubString,
  }, ''),
});
