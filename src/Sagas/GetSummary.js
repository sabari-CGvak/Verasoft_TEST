import { put, call, take } from "redux-saga/effects";
import { GetSummary } from "../Api/Api";
import { GET_SUMMARY, GET_SUMMARY_SUCCESS, GET_SUMMARY_FAILURE }  from '../Redux/Actions/Actions';

function* fetchData() {
  try {
    const data = yield call(GetSummary);
    yield put({ type: GET_SUMMARY_SUCCESS, data });
  } catch (e) {
    yield put({ type: GET_SUMMARY_FAILURE, error: e });
  }
}

function* dataSaga() {
  while (true) {
    yield take(GET_SUMMARY);
    yield call(fetchData);
  }
}

export default dataSaga;
