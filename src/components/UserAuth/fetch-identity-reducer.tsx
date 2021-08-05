import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "./../../types/UserData"
import { PayloadAction } from "@reduxjs/toolkit";
import { AUTH_STATE } from "../../types/auth-state";


const initialState: AUTH_STATE = {
    id: '',
    expiresIn: -1,
    token: '',
    error: false
}
const AuthenticationSlice = createSlice({
    name: 'loggingReducer',
    initialState,
    reducers : {
        //UserData (consisting of username and password) is sent as payload while login
        login : (state: AUTH_STATE , task : PayloadAction<UserData>) => { 
            console.log(task)
        },
        //AUTH_STATE is the payload set in watcher saga while calling this
        setUser : (state: AUTH_STATE , task : PayloadAction<AUTH_STATE>) => {
            console.log(task.payload)
            if (task.payload && task.payload.token)
                state.token = task.payload.token;
       },
        logout: (state: AUTH_STATE) =>  {
            console.log('logging out')
            state.token = ''
        },
        viewProfilePage: (state: AUTH_STATE) => {

        },
        viewVotingPage: (state: AUTH_STATE) => {
            
        }


    }
})
export const fetchAuthActions = AuthenticationSlice.actions;
export default AuthenticationSlice;