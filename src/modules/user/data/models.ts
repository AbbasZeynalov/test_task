export interface IUser {
    id: string;
    first_name: string;
    last_name: string;
}

export interface IUserResponse {
    userCount: number;
    users: IUser[]
}

export interface IUserTableColumn {
    id: string;
    label: string;
    minWidth: number;
}