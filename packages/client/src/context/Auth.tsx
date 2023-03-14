import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth"
import { auth } from "../config/firebase"
import { api } from "../services/api"

interface AuthContextData {
  token: string | null
  login: (email: string, password: string) => Promise<void>
  logOut: () => Promise<void>
  isLoading: boolean
  isError: boolean
  resetPassword: (email: string) => Promise<void>
}

export const AuthContext = createContext<AuthContextData>({
  token: null,
  login: async () => {},
  logOut: async () => {},
  isLoading: false,
  isError: false,
  resetPassword: async () => {},
})

export function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken, remove] = useLocalStorage<string | null>(
    "@FirebaseToken",
    null
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setToken(null)
        remove()
        return
      }
      const tokenId = await user.getIdToken(false)
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${tokenId}`
      setToken(tokenId)
    })

    return unsubscribe
  }, [setToken, remove])

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        setIsLoading(true)
        await signInWithEmailAndPassword(auth, email, password)
        setIsError(false)
      } catch {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    },
    []
  )
  const logOut = useCallback(async () => {
    try {
      setIsLoading(true)
      await signOut(auth)
      setIsError(false)
    } catch {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const resetPassword = useCallback((email: string) => {
    return sendPasswordResetEmail(auth, email)
  }, [])

  const value = useMemo(() => {
    return { token, login, logOut, isLoading, isError, resetPassword }
  }, [token, login, logOut, isLoading, isError, resetPassword])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
