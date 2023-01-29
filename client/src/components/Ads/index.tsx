import { useEffect, useState } from "react"
import { usePaginatedAds } from "../../hooks/react-query/query/usePaginatedAds"
import { Advertising } from "../../interfaces/api"
import { randomize } from "../../utils/array"
import { Error } from "../Error"
import * as Sc from "./style"

export function Ads() {
  const { data, isError, isSuccess, isLoading } = usePaginatedAds({
    limit: 10,
  })
  const [shuffledAds, setShuffledAds] = useState<
    Advertising[] | null
  >()

  useEffect(() => {
    if (!isSuccess) return
    if (isLoading) return

    setShuffledAds(randomize(data.data.advertisings))
  }, [isSuccess, data?.data.advertisings, isLoading])

  if (isError) {
    return <Error message="Não foi possível carregar o anúncio" />
  }

  if (data?.data.advertisings.length === 0) {
    return <Error message="Nenhum anúncio encontrado" />
  }

  return (
    <>
      {isSuccess &&
        shuffledAds?.map((ad, index) => {
          if (index > 2) return null
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
