import { account } from "../lib/appwrite";

export interface AuthUser {
    $id: string;
    name: string;
    email: string;
}

export async function loginTeacher(
    email: string,
    password: string,
): Promise<AuthUser> {
    await account.createEmailPasswordSession({
        email,
        password,
    });

    return account.get<AuthUser>();
}

export async function getCurrentUser(): Promise<AuthUser> {
    return account.get<AuthUser>();
}

export async function logoutTeacher(): Promise<void> {
    await account.deleteSession({
        sessionId: "current",
    });
}