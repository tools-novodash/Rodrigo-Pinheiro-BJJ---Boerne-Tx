interface Window {
  fbq?: (event: string, name: string, params?: Record<string, unknown>) => void
  gtag?: (command: string, event: string, params?: Record<string, unknown>) => void
}
