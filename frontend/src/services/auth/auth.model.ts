export interface AuthModel {
    email: string;
    password: string;
}

export interface AuthenticatedUserModel {
    [x: string]: any;
    id: string;
    email: string;
    user_type: string;
    status: string;
}

export interface AuthenticationResponseModel {
    data: AuthenticatedUserModel;
    message: string;
}