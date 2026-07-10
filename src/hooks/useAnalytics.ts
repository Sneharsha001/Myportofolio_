// Analytics event hooks — stub implementation
// Replace the console.log calls with your analytics provider
// (Google Analytics, Plausible, Posthog, etc.) when ready.

type AnalyticsEvent =
  | { type: 'resume_download' }
  | { type: 'project_view'; projectId: string }
  | { type: 'contact_submit' }
  | { type: 'github_click'; url: string }
  | { type: 'linkedin_click' }
  | { type: 'ai_widget_open' }
  | { type: 'ai_widget_query'; query: string };

function track(event: AnalyticsEvent) {
  // TODO: Replace with real analytics provider
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', event);
  }
  // Example for Google Analytics:
  // window.gtag?.('event', event.type, event);
  //
  // Example for Plausible:
  // window.plausible?.(event.type, { props: event });
}

export function useAnalytics() {
  return {
    trackResumeDownload: () => track({ type: 'resume_download' }),
    trackProjectView: (projectId: string) => track({ type: 'project_view', projectId }),
    trackContactSubmit: () => track({ type: 'contact_submit' }),
    trackGithubClick: (url: string) => track({ type: 'github_click', url }),
    trackLinkedinClick: () => track({ type: 'linkedin_click' }),
    trackAIWidgetOpen: () => track({ type: 'ai_widget_open' }),
    trackAIWidgetQuery: (query: string) => track({ type: 'ai_widget_query', query }),
  };
}
