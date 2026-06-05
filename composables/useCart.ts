import type { MenuItem } from '~/types'


export function useCart() {
    const cartStore = useCartStore()

    const total = computed(() => 
        cartStore.items.reduce((acc , item) => acc + item.menuItem.price * item.quantity , 0)
    )

    const count = computed(() =>
        cartStore.items.reduce((acc , item) => acc + item.quantity , 0)
    )

    return {
        items:  computed(() => cartStore.items),
        total,
        count,
        addItem: (menuItem: MenuItem, quantity: 1) => cartStore.add(menuItem, quantity),
        removeItem: (menuItemId: string) => cartStore.remove(menuItemId),
        updateItem: (menuItemId: string, quantity: number) => cartStore.update(menuItemId, quantity),
        clear: () => cartStore.clear(),
    }
}