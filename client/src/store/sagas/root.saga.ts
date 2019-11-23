import { all, call } from 'redux-saga/effects';

import { cartSagas } from './cart.sagas';
import { shopSagas } from './shop.sagas';
import { userSagas } from './user.sagas';

export default function* rootSaga() {
  yield all([
    call(shopSagas),
    call(userSagas),
    call(cartSagas)
  ]);
}
