import {
    storage,
    APPWRITE_BUCKET_ID,
} from "../lib/appwrite";

export function getImageUrl(fileId: string) {
    return storage.getFileView({
        bucketId: APPWRITE_BUCKET_ID,
        fileId,
    });
}