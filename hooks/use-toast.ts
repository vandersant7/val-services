"use client"

// Simplified version of the use-toast hook
import { useState } from "react"

type ToastProps = {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = (props: ToastProps) => {
    setToasts((prev) => [...prev, props])
    // In a real implementation, you would also handle removing toasts after a timeout
  }

  return { toast, toasts }
}
