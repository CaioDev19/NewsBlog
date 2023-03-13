import { trpc } from "../../../config/trpc"

interface Props {
  id: string | number
  enabled?: boolean
}
export function useNew({ id, enabled = true }: Props) {
  return trpc.post.listById.useQuery(
    { id },
    {
      enabled,
      cacheTime: 0,
    }
  )
}
