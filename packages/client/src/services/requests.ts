import { api } from "./api"
import { AxiosResponse } from "axios"
import { Advertising } from "../interfaces/api"
import { RouterOutput } from "server"

export function createNew(
  data: FormData
): Promise<AxiosResponse<RouterOutput["post"]["listById"]>> {
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
}): Promise<AxiosResponse<RouterOutput["post"]["listById"]>> {
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
export function deleteAdvertising(
  id: string | number
): Promise<AxiosResponse> {
  return api.delete(`admin/advertising/${id}`)
}
