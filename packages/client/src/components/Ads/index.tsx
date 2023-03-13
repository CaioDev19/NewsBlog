import { usePaginatedAds } from "../../hooks/react-query/query/usePaginatedAds"
import { Error } from "../Error"
import * as Sc from "./style"

export function Ads() {
  const { data, isError, isSuccess } = usePaginatedAds({
    status: "Fixo",
  })

  if (isError) {
    return <Error message="Não foi possível carregar o anúncio" />
  }

  if (data?.advertisings.length === 0) {
    return <Error message="Nenhum anúncio encontrado" />
  }

  return (
    <>
      {isSuccess &&
        data.advertisings?.map((ad) => {
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
