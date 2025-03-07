"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
    person_profiles: "identified_only", // or 'always' for anonymous profiles
  });
} else {
  console.warn("PostHog key is missing. Skipping initialization.");
}

export function CSPostHogProvider({ children }: React.PropsWithChildren) {
  return process.env.NEXT_PUBLIC_POSTHOG_KEY ? (
    <PostHogProvider client={posthog}>{children}</PostHogProvider>
  ) : (
    <>{children}</>
  );
}
