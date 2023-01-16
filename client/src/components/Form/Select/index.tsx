import * as Sc from "./style"
import { Controller } from "react-hook-form"
import { Control } from "react-hook-form/dist/types"

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: { id: number; name: string }[]
  name: string
  control: Control<any, any>
}

export function Select({ options, name, control, ...rest }: Props) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ref, name, value } }) => {
        return (
          <Sc.StyledSelect
            name={name}
            onChange={onChange}
            value={value}
            ref={ref}
            {...rest}
          >
            <option value="" disabled>
              Selecione uma categoria
            </option>
            {options.map((option) => {
              return (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              )
            })}
          </Sc.StyledSelect>
        )
      }}
    />
  )
}
