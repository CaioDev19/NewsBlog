import { NextPage } from "next"
import { Spinner } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useAuth } from "../../hooks/useAuth"
import * as Sc from "../../styles/Login"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Login as ILogin,
  LoginSchema,
} from "../../global/validators/loginSchema"
import logo from "../../../assets/images/logoBlack.svg"
import { Text } from "../../global/styles/Typography"
import { useRouter } from "next/router"

const Login: NextPage = () => {
  const { token, login, isLoading, isError } = useAuth()
  const router = useRouter()

  const {
    handleSubmit,
    control,
    resetField,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function handleLogin(data: ILogin) {
    await login(data.email, data.password)
    reset()
  }

  function handleSubmitError(error: any) {
    if (error.email) {
      resetField("email", {
        keepError: true,
      })
    }
    if (error.password) {
      resetField("password", {
        keepError: true,
      })
    }
  }

  if (!isLoading && token) {
    router.push("/")
  }

  return (
    <Sc.MainContainer>
      <Sc.CardContainer>
        <Sc.Logo src={logo} alt="Logo" />
        {!isLoading && isError && (
          <Text type="title" as="h2" size="lrg" color="red">
            Email ou senha inválidos
          </Text>
        )}
        <Sc.Form
          onSubmit={handleSubmit(handleLogin, handleSubmitError)}
        >
          <Sc.InputContainer>
            <Sc.SInput
              type="text"
              name="email"
              control={control}
              placeholder={errors?.email?.message || "Email"}
            />
            <Sc.SInput
              type="password"
              name="password"
              control={control}
              placeholder={errors?.password?.message || "Senha"}
            />
          </Sc.InputContainer>
          <Sc.Link href="/admin/redefinir-senha">
            <Text
              type="span"
              as="span"
              size="rgl"
              position="left"
              color="blue"
            >
              Esqueceu a senha?
            </Text>
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

export default Login
