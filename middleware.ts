import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",
  "/blog",
  "/contact",
  "/shop",
  "/shop/(.*)",
  "/checkout/(.*)",
  "/cart",
  "/api/(.*)",
]);

export default clerkMiddleware(async (auth, request) => {
  const url = new URL(request.url);

  // Check if the route is public
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};  
