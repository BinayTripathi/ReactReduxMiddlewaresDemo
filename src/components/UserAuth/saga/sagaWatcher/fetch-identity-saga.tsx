import { takeLatest, put, call } from "@redux-saga/core/effects";
import {fetchAuthActions} from '../../fetch-identity-reducer';
import loginHandler from '../sagaWorker/fetch-identity'
import { push } from "connected-react-router";

export function* viewVotingPage() {
    yield put(push("/payidui/payid-modify"))
}

export function* viewProfilePage() {
    yield put(push("/payidui/payid-modify"))
}

export default function* watcherSaga() {

    //all 3 actions fetchAuthActions.login , viewProfilePage and viewVotingPage is watched - if any is 
    // dispatched corrosponding generator(worker) fuction is called
    yield takeLatest(fetchAuthActions.login, loginHandler)    
    yield takeLatest(fetchAuthActions.viewProfilePage, viewProfilePage);
    yield takeLatest(fetchAuthActions.viewVotingPage, viewVotingPage);
}