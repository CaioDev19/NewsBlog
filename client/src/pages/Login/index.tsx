import { auth } from "../../config/firebase"
import { useState } from "react"
import { signInWithEmailAndPassword, signOut } from "firebase/auth"

export function Login() {
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )

      const token = await userCredential.user.getIdToken()

      console.log(token)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <div>
      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value)
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value)
          }}
        />

        <button onClick={login}> Login</button>
      </div>

      <button onClick={logout}> Sign Out </button>
    </div>
  )
}
