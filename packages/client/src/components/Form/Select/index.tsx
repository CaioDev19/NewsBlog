import * as Sc from "./style"
import { Controller } from "react-hook-form"
import { Control } from "react-hook-form/dist/types"
import { RouterOutput } from "server"

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: RouterOutput["category"]["list"] | []
  name: string
  control: Control<any, any>
  customPlaceholder?: string
}

export function Select({
  options,
  name,
  control,
  customPlaceholder,
  ...rest
}: Props) {
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
              {customPlaceholder}
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
