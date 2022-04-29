import { IUser } from ".";

export interface IProduct {
    
    _id: string;
    title: string;
    description: string;
    price: number;
    img:string;
    owner: IUser
    
}