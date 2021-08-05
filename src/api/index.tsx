import axios, { AxiosInstance , AxiosError } from "axios";
import { tokenToString } from "typescript"
import store from "../store/store";
import { DefaultHeaders } from "../types/global"
import { getTraceId } from "../utils/getUniqueId";

export interface GenerateApiArguements {
    token?: string | '';
    extraHeaders?: Record<string,String>;
    action?: any | null;
}

export const generateDefaultHeader = 
(token?: string, extraHeaders?: Record<string,String>, action?: any) : DefaultHeaders => {

    let headers = {};
    if(token) {
        headers = {
            Authorization: `Bearer ${token}`,
            "X-B3-TraceId": getTraceId()
        };
    }
    return headers;
}

export const generateAPI = (args: GenerateApiArguements) : AxiosInstance => {

    const api = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        timeout: process.env.REACT_APP_REQUEST_TIMEOUT? Number( process.env.REACT_APP_REQUEST_TIMEOUT) : 10000,
    });

    api.interceptors.request.use(
        (config) => {
            return {
                ...config,
                headers: generateDefaultHeader(args.token,args.extraHeaders),
            };
        }, 

        (error) => {
            Promise.reject(error);
        }
    )


    api.interceptors.response.use (
        (response) => {
            console.log('axios success')
            return response;
        },
        (error: AxiosError) => {
            console.log('axios error')
            const responseCode = error?.response?.status;
            if (error.code === 'ECONNABORTED') //TODO
                console.log('');//notificationActions.showErrorAction["error1" , "error2"];
            else {
                switch(responseCode) {
                    case 302:
                        //notifyTGtoLogout();
                        break;
                    case 401:
                        if(error?.response?.data.code === "expired.access.token" ) {
                            console.log('');//TODO:  store.dispatch(userActions.refreshToken(arg.action))
                        }
                        break;
                    default: 
                        break;
                }

            };
            return Promise.reject(error);
        }

    )

    return api;
}