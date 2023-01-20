export interface Article {
  source: {
    id: string
    name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface News {
  status: string
  totalResults: number
  articles: Article[]
}

export interface PostResponse {
  id: string
  title: string
  content: string
  summary: string
  date: string
  image: {
    url: string
    name: string
  }
  category: {
    id: string
    name: string
  }
}

export interface PostRequest
  extends Omit<PostResponse, "image" | " category" | "id"> {
  category_id: string
  image: File
}
