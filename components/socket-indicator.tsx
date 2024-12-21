"use client"

import { useSocket } from "./providers/socket-provider"
import { Badge } from "./ui/badge"

export const SocketIndicator = () => {
    const {isConnected} = useSocket()

    if (!isConnected) {
        return (
            <Badge variant="outline" className="bg-yellow-600 text-white border-none">
                Fallback : Polling every 1s
            </Badge>
        )
    }

    return (
        <Badge variant="outline" className="bg-emerald-600 text-white border-none relative">
    Live <span className="relative ml-2 inline-block w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
    
</Badge>

    
    )
}