import { NextRequest, NextResponse } from "next/server";
const locales = ["en", "pt"];
const defaultLocale = "pt";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/"],
};
