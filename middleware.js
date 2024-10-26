import { NextResponse } from 'next/server'

export function middleware(request) {
  // Check if the request is for sitemap.xml
  if (request.nextUrl.pathname === '/sitemap.xml') {
    // Redirect to sitemap-0.xml
    return NextResponse.redirect(new URL('/sitemap-0.xml', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/sitemap.xml',
}