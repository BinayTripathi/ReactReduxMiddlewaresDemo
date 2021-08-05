import { call,put } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import authenticateUser from '../../../../api/fetch-identity';
import { UserData } from "../../../../types/UserData";
import { AxiosResponse } from "axios";
import { replace } from 'connected-react-router'
import {fetchAuthActions} from '../../fetch-identity-reducer';



export default function* loginHandler(action : PayloadAction<UserData>) {

    const userData: UserData = {
        userId: action.payload.userId,
        password: action.payload.password
    }
    try {
        console.log(action)
        //Can add an action for dispatching loading component
        //loginHandler function to be called whenever fetchAuthAction.login is dispatched
        
        //authenticateUser function has the actual API call using axios
        const response: AxiosResponse = yield call(authenticateUser,userData) 
        console.log('done with login handler')
        const {data} = response;
        yield put(fetchAuthActions.setUser(data))  
        yield put(replace('/voter'))
        // data will be of type AUTH_STATE since that is the payload type defined in reducer
        //Can have an a ction to signify loading done.
        //In case of error can create action for notification portals
        //Axios return a promise and yield is used in watcher saga to in place of async - await
    } catch (error) {
        console.log(error)
    }
}