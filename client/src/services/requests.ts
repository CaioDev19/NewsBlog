import { api, realApi } from "./api"
import { AxiosResponse } from "axios"
import { News, PostResponse } from "../interfaces/api"
import { QueryFunctionContext } from "@tanstack/react-query"

export function getNews({
  queryKey,
}: QueryFunctionContext): Promise<AxiosResponse<News>> {
  return api.get(
    `/everything?q=computer&language=pt&pageSize=${queryKey[2]}&page=${queryKey[1]}`
  )
}
export function getNew({
  queryKey,
}: QueryFunctionContext): Promise<AxiosResponse<News>> {
  return api.get(
    `/everything?q=computer&language=pt&pageSize=1&page=${queryKey[1]}`
  )
}
export function getNewByCategory({
  queryKey,
}: QueryFunctionContext): Promise<AxiosResponse<News>> {
  return api.get(
    `/top-headlines?country=br&category=${queryKey[3]}&pageSize=${queryKey[2]}&page=${queryKey[1]}`
  )
}

export function createPost(
  data: FormData
): Promise<AxiosResponse<PostResponse>> {
  return realApi.post("/admin/post", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}
