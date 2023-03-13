import { api } from "./api"
import { AxiosResponse } from "axios"
import {
  Advertising,
  Advertisings,
  Article,
  Category,
  News,
} from "../interfaces/api"
import { QueryFunctionContext } from "@tanstack/react-query"

export function getNews({
  queryKey,
}: QueryFunctionContext): Promise<AxiosResponse<News>> {
  return api.get(`/post/?page=${queryKey[1]}&limit=${queryKey[2]}`)
}
export function getNew({
  queryKey,
}: QueryFunctionContext): Promise<AxiosResponse<Article>> {
  return api.get(`/post/${queryKey[1]}`)
}
export function getNewByCategory({
  queryKey,
}: QueryFunctionContext): Promise<AxiosResponse<News>> {
  return api.get(
    `/post/?categoryId=${queryKey[3]}&limit=${queryKey[2]}&page=${queryKey[1]}`
  )
}
export function listCategories(): Promise<AxiosResponse<Category[]>> {
  return api.get("/category")
}
export function createNew(
  data: FormData
): Promise<AxiosResponse<Article>> {
  return api.post("/admin/post", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}
export function deleteNew(
  id: string | number
): Promise<AxiosResponse> {
  return api.delete(`admin/post/${id}`)
}
export function updateNew({
  id,
  data,
}: {
  id: string | number
  data: FormData
}): Promise<AxiosResponse<Article>> {
  return api.put(`admin/post/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}
export function createAdvertising(
  data: FormData
): Promise<AxiosResponse<Advertising>> {
  return api.post("/admin/advertising", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}
export function getAdvertising({
  queryKey,
}: QueryFunctionContext): Promise<AxiosResponse<Advertisings>> {
  return api.get(
    `/advertising/?page=${queryKey[1]}&limit=${queryKey[2]}`
  )
}
export function getRotativeAdvertising({
  queryKey,
}: QueryFunctionContext): Promise<AxiosResponse<Advertisings>> {
  return api.get(
    `/advertising/rotative/?page=${queryKey[1]}&limit=${queryKey[2]}`
  )
}
export function getFixedAdvertising(): Promise<
  AxiosResponse<Advertisings>
> {
  return api.get("/advertising/fixed")
}
export function deleteAdvertising(
  id: string | number
): Promise<AxiosResponse> {
  return api.delete(`admin/advertising/${id}`)
}