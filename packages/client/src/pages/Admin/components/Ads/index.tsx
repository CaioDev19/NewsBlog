import * as Sc from "./style"
import { Error } from "../../../../components/Error"
import { Ad } from "./Ad"
import { RouterOutput } from "server"

interface Props {
  data: RouterOutput["advertising"]["list"]
}
export function Ads({ data }: Props) {
  if (data.advertisings.length === 0) {
    return <Error size="lrg" message="Nenhum anúncio encontrado!" />
  }

  return (
    <Sc.Container>
      {data.advertisings.map((ad) => (
        <Ad key={ad.id} data={ad} />
      ))}
    </Sc.Container>
  )
}
