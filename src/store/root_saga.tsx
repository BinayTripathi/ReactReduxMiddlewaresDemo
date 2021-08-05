import { fork,all } from "redux-saga/effects"
import authWatch  from "../components/UserAuth/saga/sagaWatcher/fetch-identity-saga"

export default function* rootSaga() {
    yield all([authWatch()]) //, can pass comma sperated list here])
}