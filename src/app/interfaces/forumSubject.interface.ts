import { Commentary } from "./commentary.interface"
import { User } from "./user.interface"

export interface ForumSubject {
    createdAt: Date,
    title: string,
    description: string,
    user: User,
    comments: Commentary[]
}
