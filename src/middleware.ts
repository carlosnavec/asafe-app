export { default } from "next-auth/middleware"

import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('next-auth.session-token') || request.cookies.get('__Secure-next-auth.session-token');
 
  if (isAuthenticated) {
    return NextResponse.next()
  }
 

  const nextUrl = request.nextUrl
  if  (request.url.includes('error=OAuthSignin')) {
    nextUrl.searchParams.delete('error');
    return NextResponse.redirect(new URL('/error', nextUrl))
  }
  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = { matcher: ["/dashboard/:path*"] }