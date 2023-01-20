import { useState } from "react"
import { useAuth } from "../../../../hooks/useAuth"
import { FormEvent } from "react"
import * as Sc from "../style"
import { Text } from "../../../../global/styles/Typography"
import { Spinner } from "react-bootstrap"
import { StyledInput } from "../../../../components/Form/Input/style"

export function ResetPassword() {
  const { resetPassword } = useAuth()
  const [email, setEmail] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await resetPassword(email)
      setIsSuccess(true)
    } catch {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Sc.MainContainer>
      <Sc.CardContainer>
        <Sc.Form onSubmit={handleSubmit}>
          <Text type="title" as="h2">
            Redefinir Senha
          </Text>
          <StyledInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Sc.SButton
            size="sml"
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
              "Redefinir"
            )}
          </Sc.SButton>
          {isSuccess && (
            <Text type="span" as="span" size="rgl" color="blue">
              Verifique seu e-mail
            </Text>
          )}
          {isError && (
            <Text type="span" as="span" color="red" size="rgl">
              E-mail inválido
            </Text>
          )}
        </Sc.Form>
      </Sc.CardContainer>
    </Sc.MainContainer>
  )
}
