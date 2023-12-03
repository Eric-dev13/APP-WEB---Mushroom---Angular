import { Role } from "./role.interface";

export interface User {
    id?:number
    username?: string,
    roles: Role[],
    pseudo: string,
    email: string,
    password?: string,
    firstname?: string,
    lastname?: string,
    filename?: string
}

