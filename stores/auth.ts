import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null as string | null,
    }),

    actions: {
        setCustomerToken(token: string) {
            this.token = token
            if (import.meta.client) {
                localStorage.setItem('customerToken', token)
            }
        },

        loadFromStorage() {
            if (!import.meta.client) return
            const token = localStorage.getItem('customerToken')
            if (token) {
                this.token = token
            }
        },

        removeToken() {
            this.token = null
            if (import.meta.client) {
                localStorage.removeItem('customerToken')
            }
        },
    },
})