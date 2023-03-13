import { Helmet } from "react-helmet-async"

interface Props {
  title: string
  description: string
}
export function Seo({ title, description }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
