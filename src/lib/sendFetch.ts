import { ApiRequestConfig } from "@/interfaces/sendFetch";

export async function sendFetch(params: ApiRequestConfig) {
    const fullUrl = `${params.prefix}/${params.endpoint}`.replace(/\/+/g, '/');

    const response = await fetch(fullUrl, {
        method: params.method,
        headers: {
            'Content-Type': 'application/json',
            ...params.headers,
        },
        body: params.body && params.method !== 'GET'
            ? JSON.stringify(params.body)
            : undefined,
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
}