import { put, call, take } from "redux-saga/effects";
import { GetOrders } from "../../Api/Api";

function* fetchData() {
  try {
    const data = yield call(GetOrders);
    yield put({ type: "GET_ORDERS_SUCCESS", data });
  } catch (e) {
    yield put({ type: "GET_ORDERS_FAILURE", error: e });
  }
}

function* dataSaga() {
  while (true) {
    yield take("GET_ORDERS");
    yield call(fetchData);
  }
}

export default dataSaga;
