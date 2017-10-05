import { takeEvery, put } from 'redux-saga/effects';
import actions from '~/store/actions';

function* todo({ payload }) {
  try {
    yield put(actions.todo.todoExampleSuccess(payload));
  } catch (err) {
    yield put(actions.todo.todoExampleError());
  }
}

export default function* () {
  yield takeEvery(actions.todo.todoExampleRequest, todo);
}
