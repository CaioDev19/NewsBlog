export interface Advertising {
  id: number
  image: {
    url: string
    name: string
  }
  status: "Fixo" | "Móvel"
}
export interface Advertisings {
  totalPages: number
  currentPage: number
  advertisings: Advertising[]
}
