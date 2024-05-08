import { ForumSubject } from "./forumSubject.interface";

export interface ForumCategory {
    id:number;
    createdAt: Date;
    name: string;
    forumSubjects: ForumSubject[];
}
