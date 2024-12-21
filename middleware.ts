import { authMiddleware } from "@clerk/nextjs";

// Middleware to protect authenticated routes
const protectedRoutes = authMiddleware({
    publicRoutes: ["/api/uploadthing", "/components/landing"], 
});

export default protectedRoutes;

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
