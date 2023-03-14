import * as Sc from "./style"
import { Text } from "../../global/styles/Typography"
import { BsEmojiFrownFill } from "react-icons/bs"

export function Error({
  size = "exl",
  message,
  theme = "dark",
}: {
  size?: "sml" | "lrg" | "exl"
  message: string
  theme?: "light" | "dark"
}) {
  return (
    <Sc.ErrorContainer>
      <Text
        type="title"
        as="h2"
        color={theme === "dark" ? "black" : "white"}
        weight="str"
        size={size === "lrg" ? "exl" : "lrg"}
      >
        {message}
      </Text>
      <BsEmojiFrownFill size={50} color="red" />
    </Sc.ErrorContainer>
  )
}
