export type Category = {
  id: string
  name: string
}
export interface Article {
  id: string
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
  id: string
  image: {
    url: string
    name: string
  }
}
export interface Advertisings {
  totalPages: number
  currentPage: number
  advertisings: Advertising[]
}
