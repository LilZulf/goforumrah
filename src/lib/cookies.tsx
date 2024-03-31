import { cookies } from "next/headers";


export async function setSignup(formData: FormData) {
    let isFirst = true;
    // @ts-ignore: Ignore TypeScript error due to --downlevelIteration flag
    for (const pair of formData.entries()) {
        if (isFirst) {
            isFirst = false;
            continue;
        }
        cookies().set(pair[0], pair[1]);
    }
}

export async function getCookies(param: string): Promise<string> {

    const cookie = cookies().get(param);
    if (cookie) {
        return cookie.value;
    }
    return '';
}

export async function getAllCookies(): Promise<{ [key: string]: string } | undefined> {
    const cookiesStore = cookies().getAll();
    if (cookiesStore && cookiesStore.length > 0) {
        const cookieObject: { [key: string]: string } = {};
        cookiesStore.forEach(cookie => {
            cookieObject[cookie.name] = cookie.value;
        });
        return cookieObject;
    }
}
