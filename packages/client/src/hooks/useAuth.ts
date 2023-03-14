import { useContext } from "react"
import { AuthContext } from "../context/Auth"

export function useAuth() {
  const value = useContext(AuthContext)
  return value
}
