'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import { usePathname, useRouter } from 'next/navigation'

interface AuthContextType {
  user: User | null
  loading: boolean
  isAuthorized: boolean
}

// Define protected routes and their requirements
const PROTECTED_ROUTES = {
  '/profile': { protected: true },
  '/admin': { protected: true, roles: ['ADMIN'] },
  '/settings': { protected: true },
} as const

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isAuthorized: false
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAuthorized, setIsAuthorized] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check initial session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setLoading(false)
    }
    checkSession()

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    const checkAccess = async () => {
      const route = PROTECTED_ROUTES[pathname as keyof typeof PROTECTED_ROUTES]
      
      if (!route?.protected) {
        setIsAuthorized(true)
        return
      }

      if (!user) {
        setIsAuthorized(false)
        router.push('/login')
        return
      }

      if (route.roles) {
        const { data: userData } = await supabase
          .from('users')
          .select('role')
          .eq('id', user.id)
          .single()

        if (!userData || !route.roles.includes(userData.role)) {
          setIsAuthorized(false)
          router.push('/unauthorized')
          return
        }
      }

      setIsAuthorized(true)
    }

    checkAccess()
  }, [pathname, user, router])

  return (
    <AuthContext.Provider value={{ user, loading, isAuthorized }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)