import { IUser } from ".";

export interface IProduct {
    
    _id: string;
    title: string;
    description: string;
    price: number;
    img:string;
    owner: string
    //TODO add IUser to owner when service is done
}