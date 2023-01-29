import * as Sc from "./style"
import { Advertisings } from "../../../interfaces/api"
import { Error } from "../../Error"
import { Ad } from "./Ad"

interface Props {
  data: Advertisings
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
