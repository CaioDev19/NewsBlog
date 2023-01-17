import * as Sc from "./style"
import { AiOutlineFacebook } from "react-icons/ai"
import { BsTwitter, BsWhatsapp } from "react-icons/bs"

interface Props {
  url: string
  social: "facebook" | "twitter" | "whatsapp"
}

export function ShareButton({ url, social }: Props) {
  const socialLinks = {
    facebook: {
      url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      icon: <Sc.Icon as={AiOutlineFacebook} />,
    },
    twitter: {
      url: `https://twitter.com/intent/tweet?url=${url}`,
      icon: <Sc.Icon as={BsTwitter} />,
    },
    whatsapp: {
      url: `https://api.whatsapp.com/send?text=${url}`,
      icon: <Sc.Icon as={BsWhatsapp} />,
    },
  }

  return (
    <Sc.Link href={socialLinks[social].url} target="_blank">
      {socialLinks[social].icon}
    </Sc.Link>
  )
}
