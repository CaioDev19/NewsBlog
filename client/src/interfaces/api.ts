export type Category = {
  id: number
  name: string
}
export interface Article {
  id: number
  title: string
  content: string
  summary: string
  date: string
  image: {
    url: string
    name: string
  }
  category: Category
}
export interface News {
  totalPages: number
  currentPage: number
  posts: Article[]
}
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
