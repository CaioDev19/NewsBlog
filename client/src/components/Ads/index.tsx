import { useFixedAds } from "../../hooks/react-query/query/useFixedAds"
import { Error } from "../Error"
import * as Sc from "./style"

export function Ads() {
  const { data, isError, isSuccess } = useFixedAds({})

  if (isError) {
    return <Error message="Não foi possível carregar o anúncio" />
  }

  if (data?.data.advertisings.length === 0) {
    return <Error message="Nenhum anúncio encontrado" />
  }

  return (
    <>
      {isSuccess &&
        data.data.advertisings?.map((ad) => {
          return (
            <Sc.Ad
              src={ad.image.url}
              alt={ad.image.name}
              key={ad.id}
            />
          )
        })}
    </>
  )
}
