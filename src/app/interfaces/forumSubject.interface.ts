import { Commentary } from "./commentary.interface"
import { ForumCategory } from "./forum-category.interface"
import { User } from "./user.interface"

export interface ForumSubject {
    createdAt: Date,
    title: string,
    description: string,
    user: User,
    forumCommentaries: Commentary[],
    forumCategories: ForumCategory[]

}
