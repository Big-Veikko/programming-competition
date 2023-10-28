export interface AuthModel {
    email: string;
    password: string;
}

export interface AuthenticatedUserModel {
    id: string;
    email: string;
    user_type: string;
    status: string;
}