import { useQuery } from "@tanstack/react-query"
import { getFixedAdvertising } from "../../../services/requests"

interface Props {
  enabled?: boolean
}
export function useFixedAds({ enabled = true }: Props) {
  return useQuery(["fixedAdvertising"], getFixedAdvertising, {
    enabled,
  })
}
