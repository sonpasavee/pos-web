export function useLiff() {
    const config = useRuntimeConfig()
    const authStore = useAuthStore()
    const { post } = useApi()

    async function init() {
        if (!import.meta.client) return
        const liff = (await import('@line/liff')).default
        await liff.init({ liffId: config.public.liffId })
            ; (window as any)._liff = liff
    }

    function getLiff() {
        return import.meta.client ? (window as any)._liff : null
    }

    async function login() {
        const liff = getLiff()
        if (!liff) return
        if (!liff.isLoggedIn()) {
            liff.login({ redirectUri: window.location.href })
            return false
        }
        return true
    }

    async function getLineToken() {
        const liff = getLiff()
        if (!liff?.isLoggedIn()) return null

        try {
            const accessToken = liff.getAccessToken()
            if (!accessToken) return null

            const res = await post<{ token: string }>('/auth/line', { accessToken })
            authStore.setCustomerToken(res.token)
            return res.token
        } catch (e) {
            console.error('getLineToken failed:', e)
            return null
        }
    }

    async function getProfile() {
        const liff = getLiff()
        if (!liff?.isLoggedIn()) return null
        return liff.getProfile()
    }

    function isInLINE(): boolean {
        return getLiff()?.isInClient() ?? false
    }

    return { init, login, getLineToken, getProfile, isInLINE }
}