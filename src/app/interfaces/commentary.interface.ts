import { CommentaryUser } from "./commentary-user.interface";

export interface Commentary {
    createdAt: Date,
    commentary: string,
    user: CommentaryUser
}
