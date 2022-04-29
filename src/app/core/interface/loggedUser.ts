import { IUser } from ".";

export interface ILogged extends IUser {
    accessToken: string;
    
    }