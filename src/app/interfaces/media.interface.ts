export interface Media {
    id?: number;
    //name?: string;
    filename?: String;
    file?: File;
}

export interface MediaFileToUpload {
    id?:number;
    filename: String | null;
    file: File | null;
}

