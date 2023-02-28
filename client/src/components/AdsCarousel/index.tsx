import { useEffect } from "react"
import { usePaginatedAdsRotative } from "../../hooks/react-query/query/usePaginatedAdsRotative"
import { Error } from "../Error"
import * as Sc from "./style"

export function AdsCarousel() {
  const {
    isLoading,
    data,
    isSuccess,
    fetchNextPage,
    goToPage,
    fetchPreviousPage,
    currentPage,
  } = usePaginatedAdsRotative({ limit: 1, keepPreviousData: true })

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isSuccess) return

      if (
        currentPage === data.data.totalPages &&
        data.data.totalPages > 0
      ) {
        goToPage(1)
      } else if (data.data.totalPages > 0) {
        fetchNextPage()
      }
    }, 5000)
    return () => clearInterval(intervalId)
  }, [
    currentPage,
    isSuccess,
    data?.data?.totalPages,
    fetchNextPage,
    fetchPreviousPage,
    goToPage,
  ])

  if (isLoading) {
    return (
      <Sc.ContainerPlaceholder animation="glow">
        <Sc.ImagePlaceholder />
      </Sc.ContainerPlaceholder>
    )
  }

  if (data?.data.advertisings.length === 0) {
    return <Error theme="light" message="Nenhum anúncio encontrado" />
  }

  return (
    <>
      {isSuccess ? (
        <Sc.Image
          src={data.data.advertisings[0].image.url}
          alt={data.data.advertisings[0].image.name}
          key={data.data.advertisings[0].id}
        />
      ) : (
        <Error
          size="lrg"
          theme="light"
          message="Não foi possível carregar o anúncio"
        />
      )}
    </>
  )
}
