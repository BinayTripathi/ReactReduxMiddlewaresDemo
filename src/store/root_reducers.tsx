import { combineReducers, compose } from "redux";
import VoteSlice from "../components/Voters/vote-reducer";
import AuthenticationSlice from '../components/UserAuth/fetch-identity-reducer';
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory, History } from 'history'

export const history : History  = createBrowserHistory();

const rootReducer  = () => combineReducers({
    voteCounter: VoteSlice.reducer,
    authentication: AuthenticationSlice.reducer,
    router: connectRouter(history)
})

export default rootReducer;