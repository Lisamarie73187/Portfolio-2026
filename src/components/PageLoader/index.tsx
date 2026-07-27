export const PageLoader = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <div
      className="h-6 w-6 animate-spin rounded-full border-2 border-ink/15 border-t-primary"
      role="status"
      aria-label="Loading"
    />
  </div>
);
