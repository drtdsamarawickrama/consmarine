import { Fragment, type CSSProperties } from "react";

type WaterRippleTextProps = {
  text: string;
  accent?: boolean;
};

/** Animated water-fill text; accent words remain static. */
export default function WaterRippleText({ text, accent = false }: WaterRippleTextProps) {
  return (
    <span className="cmcs3d-water-text" role="text" aria-label={text}>
      {text.split(/(\s+)/).map((part, index) => {
        if (/^\s+$/.test(part)) {
          return <Fragment key={`space-${index}`}>{part}</Fragment>;
        }

        return (
          <span
            key={`word-${index}`}
            className={`cmcs3d-water-word${accent ? " cmcs3d-water-word--accent cmcs3d-water-word--static" : ""}`}
            data-water={part}
            aria-hidden="true"
            style={{ "--cmcs-wave-delay": `${-index * 0.37}s` } as CSSProperties}
          >
            {part}
          </span>
        );
      })}
    </span>
  );
}
