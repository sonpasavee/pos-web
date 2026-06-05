export type OrderStatus =
    | 'PENDING' | 'CONFIRMED' | 'PREPARING'
    | 'READY' | 'COMPLETED' | 'CANCELLED'

export interface MenuItem {
    id: string
    name: string
    description?: string
    category: string
    price: number
    imageUrl?: string
    available: boolean
}

export interface OrderItem {
    id: string
    menuItemId: string
    menuItem: MenuItem
    quantity: number
    price: number
}

export interface Order {
    id: string
    tableId: string
    table?: { restaurantId: string }
    status: OrderStatus
    total: number
    note?: string
    createdAt: string
    items: OrderItem[]
}

export interface CartItem {
    menuItem: MenuItem
    quantity: number
}