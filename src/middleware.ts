import { NextRequest, NextResponse } from "next/server";
import { verifyUserToken } from "./server/services/edgeMiddleware";
import constants from "./constant.json";

const PUBLIC_FILE = /\.(.*)$/;
const PRIVATE_PAGES = constants.private_pages;

export async function middleware(req: NextRequest) {
  if (PUBLIC_FILE.test(req.nextUrl.pathname)) {
    return;
  }

  let isLoggedIn = false;
  try {
    await verifyUserToken(req.cookies.get("token")?.value);
    isLoggedIn = true;
  } catch (error) {
    console.log("Error: ", error);
    isLoggedIn = false;
  }

  if (isLoggedIn) {
    // Redirect logged-in user to board page when accessing the Login page.
    if (req.nextUrl.pathname == "/login") {
      return NextResponse.redirect(new URL(`/boards`, req.url));
    }
  } else {
    // Check protected routes
    if (PRIVATE_PAGES.includes(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL(`/login`, req.url));
    }
  }
}
