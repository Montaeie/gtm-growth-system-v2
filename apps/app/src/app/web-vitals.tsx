"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log(`[Web Vital] ${metric.name}:`, metric.value);
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === "production") {
      const body = JSON.stringify({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
      });

      // Send to OpenPanel or your analytics service
      if (typeof window !== "undefined" && "op" in window) {
        (window as any).op("track", "web_vitals", {
          metric: metric.name,
          value: metric.value,
          rating: metric.rating,
        });
      }

      // You can also send to your own endpoint
      // navigator.sendBeacon?.('/api/web-vitals', body);
    }
  });

  return null;
}
