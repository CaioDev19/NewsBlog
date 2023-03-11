import { NextRequest, NextResponse } from "next/server"
import { parseCookies } from "nookies"

type Cookies =
  | {
      value: string
      name: string
    }
  | undefined

export function middleware(req: NextRequest) {
  const cookies: Cookies = req.cookies.get("@FirebaseToken")

  console.log(req.url, cookies)
  if (!cookies) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/admin/anuncio",
    "/admin/editar/:path*",
    "/admin/criar-noticia",
  ],
}
