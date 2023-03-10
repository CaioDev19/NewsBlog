import { useRouter } from "next/router"
import { useState, useEffect, Dispatch } from "react"
import { useAuth } from "./useAuth"

type SignOutOnError = [Dispatch<React.SetStateAction<boolean>>]

export function useSignOutOnError(): SignOutOnError {
  const { logOut } = useAuth()
  const [shouldSignOut, setShouldSignOut] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (shouldSignOut) {
      logOut()
      router.push("/admin/login")
    }
  }, [shouldSignOut, logOut, router])

  return [setShouldSignOut]
}
