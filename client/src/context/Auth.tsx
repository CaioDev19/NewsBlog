import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
} from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { auth } from "../config/firebase"

interface AuthContextData {
  token: string | null
  login: (email: string, password: string) => Promise<void>
  logOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextData>({
  token: null,
  login: async () => {},
  logOut: async () => {},
})

export function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken, remove] = useLocalStorage<string | null>(
    "@FirebaseToken",
    null
  )

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setToken(null)
        remove()
        return
      }

      const tokenId = await user.getIdToken(false)
      setToken(tokenId)
    })

    return unsubscribe
  }, [setToken, remove])

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        console.log(error)
      }
    },
    []
  )
  const logOut = useCallback(async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const value = useMemo(() => {
    return { token, login, logOut }
  }, [token, login, logOut])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
