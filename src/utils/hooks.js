import { useEffect, useState } from "react"

export const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine)

    const goOnline = (event) => {
        setOnlineStatus(true)
    }

    const goOffline = () => {
        setOnlineStatus(false)
    }

    useEffect(() => {
        window.addEventListener("offline", goOffline)
        window.addEventListener("online", goOnline)

        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener("offline", goOffline)
            window.removeEventListener("online", goOnline)
        }
    }, [])

    return onlineStatus
}
