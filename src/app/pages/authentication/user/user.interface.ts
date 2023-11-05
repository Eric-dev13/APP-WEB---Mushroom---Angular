export interface User {
    createdAt?: Date;
    updatedAt?: Date;
    pseudo: string;
    role?: string;
    lastname?: string;
    firstname?: string;
    email: string;
    password?: string
    filename?: string;
    isVerified?: boolean;
}

