import * as Sc from "./style"
import { Controller } from "react-hook-form"
import { Control } from "react-hook-form/dist/types"
import { ChangeEvent, useState } from "react"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  control: Control<any, any>
  className?: string
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Input({
  name,
  placeholder,
  type,
  control,
  className,
  handleChange,
  ...rest
}: Props) {
  const [isEyeOpened, setIsEyeOpened] = useState(false)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref, name } }) => {
        return (
          <>
            <Sc.StyledInput
              className={className}
              type={
                type === "password"
                  ? isEyeOpened
                    ? "text"
                    : "password"
                  : type
              }
              placeholder={placeholder}
              name={name}
              onChange={onChange}
              value={value}
              ref={ref}
              {...rest}
            />
            {type === "password" && (
              <Sc.EyeIcon
                onClick={() => setIsEyeOpened((prev) => !prev)}
                as={isEyeOpened ? AiFillEye : AiFillEyeInvisible}
              />
            )}
          </>
        )
      }}
    />
  )
}
