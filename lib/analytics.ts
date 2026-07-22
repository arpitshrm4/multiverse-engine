/**
 * Multiverse Portfolio Analytics integration wrapper.
 * Provides stubs and clean integration points for GA4, Microsoft Clarity, and Search Console.
 * Include this in your layout or client wrappers as needed.
 */

// Google Analytics Measurement ID
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Microsoft Clarity Project ID
export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "";

/**
 * Log pageviews to GA4
 * @param url The page URL being viewed
 */
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag && GA_TRACKING_ID) {
    (window as any).gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

/**
 * Log custom interactive events (e.g. dimension shifts, hover clicks)
 */
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && (window as any).gtag && GA_TRACKING_ID) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * Custom hook to track navigation changes via client page views
 */
export const trackDimensionView = (dimensionId: string) => {
  event({
    action: "dimension_view",
    category: "Engagement",
    label: `Dimension ${dimensionId}`,
  });
};
