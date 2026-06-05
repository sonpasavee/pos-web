import { defineStore } from 'pinia'
import type { MenuItem, CartItem } from '~/types'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as CartItem[],
    }),

    actions: {
        add(menuItem: MenuItem, quantity: number) {
            const existing = this.items.find(
                i => i.menuItem.id === menuItem.id
            )
            if (existing) {
                existing.quantity += quantity
            } else {
                this.items.push({ menuItem, quantity })
            }
        },

        remove(menuItemId: string) {
            this.items = this.items.filter(
                i => i.menuItem.id !== menuItemId
            )
        },

        update(menuItemId: string, quantity: number) {
            const item = this.items.find(
                i => i.menuItem.id === menuItemId
            )

            if (!item) return
            if (quantity <= 0) {
                this.remove(menuItemId)
            } else {
                item.quantity = quantity
            }
        },

        clear() {
            this.items = [] 
        } ,
    }
})