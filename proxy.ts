import { NextRequest, NextResponse } from "next/server";
const locales = ["en", "pt"];
const defaultLocale = "pt";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    request.nextUrl.pathname = `/${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  return;
}

export const config = {
  matcher: ["/"],
};
