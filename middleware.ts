import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "./app/lib/i18n/config";

function isComingSoon(): boolean {
  const explicit = process.env.COMING_SOON;
  if (explicit === "true") return true;
  return false;
}

function pathnameHasLocale(pathname: string): boolean {
  const segment = pathname.split("/")[1];
  return segment ? isLocale(segment) : false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isComingSoon()) {
    const localeSegment = pathname.split("/")[1];
    const basePath = isLocale(localeSegment) ? pathname.replace(`/${localeSegment}`, "") || "/" : pathname;

    if (basePath === "/coming-soon" || basePath.startsWith("/google")) {
      return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    if (isLocale(localeSegment)) {
      url.pathname = `/${localeSegment}/coming-soon`;
    } else {
      url.pathname = `/${defaultLocale}/coming-soon`;
    }
    return NextResponse.rewrite(url);
  }

  if (!pathnameHasLocale(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|images/|parasonho-logo|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|txt|xml|json|html|woff|woff2|ttf)$).*)",
  ],
};
