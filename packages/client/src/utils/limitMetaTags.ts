export function limitMetaTagsLength(
  title: string,
  limit: number = 50
): string {
  if (title.length > limit) {
    return title.slice(0, limit) + "..."
  }
  return title
}
