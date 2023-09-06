export interface Role {
    authority: string;
}

export interface UserInterface {
    username: string | null,
    roles: Role[],
    pseudo: string,
    firstname?: string | null,
    lastname?: string | null,
    filename?: string
}
