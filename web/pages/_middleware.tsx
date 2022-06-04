import { NextResponse, NextRequest, NextFetchEvent } from "next/server";

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const { pathname, origin } = req.nextUrl;

  if (pathname === "/") {
    return NextResponse.rewrite(`${origin}/home`);
  }
  return NextResponse.next();
}
