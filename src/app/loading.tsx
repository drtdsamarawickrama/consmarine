export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-midnight text-white">
      <div className="relative flex items-center justify-center">
        <div
          className="h-14 w-14 animate-spin rounded-full border-2 border-teal-dark border-t-aqua"
          role="status"
          aria-label="Loading Constellation Marine"
        />
        <div className="absolute h-8 w-8 rounded-full bg-aqua/10 animate-ping" />
      </div>
      <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-aqua-light">
        Loading Marine Data...
      </p>
    </div>
  );
}
