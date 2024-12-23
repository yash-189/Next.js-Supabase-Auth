'use client'

import { Toaster } from 'sonner'
import { AuthProvider } from "./contexts/AuthContext"
import { useAuth } from "./contexts/AuthContext"
import LoadingScreen from '@/components/LoadingScreen'

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { loading, isAuthorized } = useAuth()

  if (loading) {
    return <LoadingScreen />
  }

  if (!isAuthorized) {
    return null
  }

  return children
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AuthWrapper>
        <Toaster position="bottom-right" />
        {children}
      </AuthWrapper>
    </AuthProvider>
  )
}

