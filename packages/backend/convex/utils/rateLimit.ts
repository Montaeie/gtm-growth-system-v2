import { rateLimit } from "convex-helpers/server/rateLimit";
import type { GenericMutationCtx, GenericQueryCtx } from "convex/server";

/**
 * Rate limiting configuration
 */
export const rateLimits = {
  // Auth endpoints: 5 requests per minute per user
  auth: {
    kind: "fixed window" as const,
    rate: 5,
    period: 60 * 1000, // 1 minute
  },
  // Mutations: 30 requests per minute per user
  mutation: {
    kind: "fixed window" as const,
    rate: 30,
    period: 60 * 1000,
  },
  // Queries: 100 requests per minute per user
  query: {
    kind: "fixed window" as const,
    rate: 100,
    period: 60 * 1000,
  },
  // Public endpoints: 10 requests per minute per IP
  public: {
    kind: "fixed window" as const,
    rate: 10,
    period: 60 * 1000,
  },
};

/**
 * Apply rate limiting to a mutation
 */
export const withRateLimit = <
  Ctx extends GenericMutationCtx<any> | GenericQueryCtx<any>,
>(
  ctx: Ctx,
  config: (typeof rateLimits)[keyof typeof rateLimits],
  identifier: string,
) => {
  return rateLimit(ctx, config, identifier);
};
