import { api } from "./api"
import { AxiosResponse } from "axios"
import { News } from "../interfaces/api"
import { QueryFunctionContext } from "@tanstack/react-query"

export function getNews({
  queryKey,
}: QueryFunctionContext): Promise<AxiosResponse<News>> {
  return api.get(
    `/everything?q=computer&pageSize=${queryKey[2]}&page=${queryKey[1]}`
  )
}
export function getNew({
  queryKey,
}: QueryFunctionContext): Promise<AxiosResponse<News>> {
  return api.get(
    `/everything?q=computer&pageSize=1&page=${queryKey[1]}`
  )
}
