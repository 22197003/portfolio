// Every image slot in the site should render through this component until
// a real asset exists. It makes missing media impossible to mistake for a
// finished photo, in dev and in any preview shared with stakeholders.
export function PlaceholderImage({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`ph-block ${className}`}>
      <span className="absolute left-3.5 bottom-3 z-10 flex items-center gap-1.5 text-[11px] tracking-wide text-ivory/55">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-champagne" />
        {label}
      </span>
    </div>
  );
}
