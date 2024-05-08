import { UserCommentary} from "./user-commentary.interface";
import { ForumSubject } from "./forumSubject.interface";

export interface Commentary {
    id: number,
    createdAt: Date,
    commentary: string,
    user: UserCommentary,
    ForumSubject: ForumSubject
}
