import { useQuery } from "@tanstack/react-query"
import { getNew } from "../../../services/requests"

interface Props {
  id: string | number
  enabled?: boolean
}
export function useNew({ id, enabled = true }: Props) {
  return useQuery(["new", id], getNew, {
    enabled,
  })
}
