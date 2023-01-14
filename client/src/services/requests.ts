import { api } from "./api"
import { AxiosResponse } from "axios"
import { News } from "../interfaces/api"
import { QueryFunctionContext } from "@tanstack/react-query"

export function getNews({
  queryKey,
}: QueryFunctionContext): Promise<AxiosResponse<News[]>> {
  return api.get(`/photos?_limit=${queryKey[2]}&_page=${queryKey[1]}`)
}
export function getNew({
  queryKey,
}: QueryFunctionContext): Promise<AxiosResponse<News>> {
  return api.get(`/photos/${queryKey[1]}`)
}
