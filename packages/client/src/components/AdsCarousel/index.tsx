import { useEffect } from "react"
import { usePaginatedAds } from "../../hooks/react-query/query/usePaginatedAds"
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
  } = usePaginatedAds({
    limit: 1,
    keepPreviousData: true,
    status: "Móvel",
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isSuccess) return

      if (currentPage === data.totalPages && data?.totalPages > 0) {
        goToPage(1)
      } else if (data?.totalPages > 0) {
        fetchNextPage()
      }
    }, 5000)
    return () => clearInterval(intervalId)
  }, [
    currentPage,
    isSuccess,
    data?.totalPages,
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

  if (data?.advertisings.length === 0) {
    return <Error theme="light" message="Nenhum anúncio encontrado" />
  }

  return (
    <>
      {isSuccess ? (
        <Sc.Image
          src={data.advertisings[0].image.url}
          alt={data.advertisings[0].image.name}
          key={data.advertisings[0].id}
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
