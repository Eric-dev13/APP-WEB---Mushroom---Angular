import { ForumSubject } from "./forumSubject.interface";
import { User } from "./user.interface";

export interface ForumCommentary {
    id?: number,
    createdAt?: Date,
    commentary: string,
    user?: User,
    user_id?: number,
    forumSubject?: ForumSubject,
    forumSubject_id?: number
}