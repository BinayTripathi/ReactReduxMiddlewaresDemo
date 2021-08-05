export interface ApiResponse {
    status: number;
}

export type DefaultHeaders = {
    "X-B3-TraceId"?: string;
    Authorization?: string;
    "Content-Type"?: string;
}

export type ErrorCode500 = "internal.server.error";
export type ErrorCode403 = "invalid.access.token" | "insufficient.scope.permission"
export type ErrorCode401 = "missing.access.token" | "expired.access.token"
export type ErrorCodeTimeout = "ECONNABORTED"