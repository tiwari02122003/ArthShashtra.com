// import { clerkMiddleware } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// const middleware = clerkMiddleware();

// export default middleware;

// // Configure which routes the middleware should apply to
// export const config = {
//   matcher: [
//     // Match all routes except static files and Next.js internals
//     "/((?!api|_next/static|_next/image|favicon.ico).*)"
//   ],
// };

// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware({
//     publicRoutes: ['/'], // List your public routes here
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"], // Middleware matcher for protected routes
// };

import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:['/']
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};


