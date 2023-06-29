import { localRouter } from "~/server/api/routers/local";
import { remoteRouter } from "~/server/api/routers/remote";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  local: localRouter,
  remote: remoteRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;