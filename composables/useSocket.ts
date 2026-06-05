import type { Order } from '~/types'

let socket: any = null

export function useSocket() {
    const config = useRuntimeConfig()

    async function connect(restaurantId: string) {
        if (!import.meta.client || socket?.connected) return
        const { io } = await import('socket.io-client')
        socket = io(config.public.socketUrl)
        socket.emit('join:restaurant', restaurantId)
    }

    function onOrderUpdated(callback: (order: Order) => void) {
        socket?.on('order:updated', callback)
    }

    function disconnect() {
        socket?.disconnect()
        socket = null
    }

    return { connect, onOrderUpdated, disconnect }
}