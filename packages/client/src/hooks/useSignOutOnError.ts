import { useState, useEffect, Dispatch } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./useAuth"

type SignOutOnError = [Dispatch<React.SetStateAction<boolean>>]

export function useSignOutOnError(): SignOutOnError {
  const { logOut } = useAuth()
  const [shouldSignOut, setShouldSignOut] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (shouldSignOut) {
      logOut()
      navigate("/admin/login")
    }
  }, [shouldSignOut, logOut, navigate])

  return [setShouldSignOut]
}
