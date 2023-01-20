import { Spinner } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useAuth } from "../../../hooks/useAuth"
import { Navigate } from "react-router-dom"
import * as Sc from "./style"
import { Text } from "../../../global/styles/Typography"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Login as ILogin,
  LoginSchema,
} from "../../../global/validators/loginSchema"
import logo from "../../../assets/images/logo.png"
import { useState } from "react"

export function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const { token, login } = useAuth()
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function handleLogin(data: ILogin) {
    setIsLoading(true)
    await login(data.email, data.password)
    setIsLoading(false)
  }

  if (token) {
    return <Navigate to="/" />
  }

  return (
    <Sc.MainContainer>
      <Sc.CardContainer>
        <Sc.Logo src={logo} alt="Logo" />
        <Sc.Form
          onSubmit={handleSubmit(handleLogin, (error) =>
            console.log(error)
          )}
        >
          <Sc.InputContainer>
            <Sc.SInput
              type="text"
              name="email"
              control={control}
              placeholder="E-mail"
            />
            <Sc.SInput
              type="password"
              name="password"
              control={control}
              placeholder="Senha"
            />
          </Sc.InputContainer>
          <Text
            type="span"
            as="a"
            size="rgl"
            position="left"
            color="blue"
            href="/admin/forgot-password"
          >
            Esqueceu a senha?
          </Text>
          <Sc.SButton
            size="lrg"
            background="black"
            color="white"
            radios="round"
            type="submit"
          >
            {isLoading ? (
              <Spinner
                as="span"
                animation="border"
                variant="light"
                size="sm"
              />
            ) : (
              "Fazer Login"
            )}
          </Sc.SButton>
        </Sc.Form>
      </Sc.CardContainer>
    </Sc.MainContainer>
  )
}
