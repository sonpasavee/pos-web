export function useApi() {
    const config = useRuntimeConfig()
    const authStore = useAuthStore()

    async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            ...(options.headers as Record<string, string>),
        }

        if (authStore.token) {
            headers['Authorization'] = `Bearer ${authStore.token}`
        }

        const res = await fetch(`${config.public.apiUrl}${path}`, {
            ...options,
            headers,
        })

        if (!res.ok) {
            const err = await res.json().catch(() => ({}))
            throw new Error(err.message || 'An error occurred')
        }

        return res.json()
    }

    return {
        get: <T>(path: string) => request<T>(path, { method: 'GET' }),
        post: <T>(path: string, body: any) => request<T>(path, {
            method: 'POST',
            body: JSON.stringify(body),
        }),
    }
}