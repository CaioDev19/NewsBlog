import { Spinner } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useAuth } from "../../../hooks/useAuth"
import { Navigate, useNavigate } from "react-router-dom"
import * as Sc from "./style"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Login as ILogin,
  LoginSchema,
} from "../../../global/validators/loginSchema"
import logo from "../../../assets/images/logo.png"

export function Login() {
  const { token, login, isLoading } = useAuth()
  const navigate = useNavigate()
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function handleLogin(data: ILogin) {
    await login(data.email, data.password)
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
          <Sc.Link
            type="span"
            as="span"
            size="rgl"
            position="left"
            color="blue"
            pointer
            onClick={() => navigate("/admin/resetPassword")}
          >
            Esqueceu a senha?
          </Sc.Link>
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
