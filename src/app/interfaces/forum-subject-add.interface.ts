import { ForumCategory } from "./forum-category.interface";

export interface ForumSubjectAdd {
    title: string,
    description: string,
    //categoriesId: number[] | undefined
    forumCategories?: ForumCategory[]
} 