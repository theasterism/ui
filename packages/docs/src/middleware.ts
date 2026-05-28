import { defineMiddleware } from "astro:middleware";
import { env } from "cloudflare:workers";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  if (url.pathname.startsWith("/api/")) {
    const ipAddress = context.request.headers.get("cf-connecting-ip") || "";

    const { success } = await env.API_RATE_LIMITER.limit({ key: ipAddress }); // key can be any string of your choosing
    if (!success) {
      return new Response(`429 Failure – rate limit exceeded`, {
        status: 429,
      });
    }

    return next();
  }

  return next();
});
