import * as Sc from "./style"
import { Controller } from "react-hook-form"
import { Control } from "react-hook-form/dist/types"
import { ChangeEvent } from "react"

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
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref, name } }) => {
        return (
          <Sc.StyledInput
            className={className}
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={
              type === "file"
                ? (e) => {
                    if (typeof handleChange !== "undefined") {
                      handleChange(e)
                    }
                  }
                : onChange
            }
            value={type === "file" ? undefined : value}
            ref={ref}
            {...rest}
          />
        )
      }}
    />
  )
}
