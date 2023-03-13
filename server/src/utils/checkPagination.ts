interface PaginationType {
  page: number
  limit: number
  totalPosts: number
}

export function checkPagination({
  totalPosts,
  limit,
  page,
}: PaginationType): {
  totalPages: number
  isValid: boolean
} {
  const totalPages = Math.ceil(Number(totalPosts) / limit)

  if ((totalPages > 0 && page > totalPages) || page < 1) {
    return {
      totalPages,
      isValid: false,
    }
  }

  return {
    totalPages,
    isValid: true,
  }
}
