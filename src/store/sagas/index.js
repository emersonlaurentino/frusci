import { fork, all } from 'redux-saga/effects';
import map from 'lodash/fp/map';
import unary from 'lodash/fp/unary';
import todo from './todo';

export default function* () {
  const _sagas = [
    todo,
  ];

  yield all(map(unary(fork))(_sagas));
}
