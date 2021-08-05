import {v4 as uuidv4} from "uuid";

export const getTraceId = (): string => {
    return uuidv4().split("_").join("")
} 