import Reveal from "@/components/ui/Reveal";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "dark",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
}) {
  const isCenter = align === "center";
  const isLight = theme === "light";

  return (
    <Reveal variant="heading">
      <div
        className={`mb-10 md:mb-14 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}
      >
        <div
          className={`mb-3.5 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] ${
            isLight ? "text-maritime" : "text-aqua-light"
          } ${isCenter ? "justify-center" : ""}`}
        >
          <span
            className={`h-0.5 w-6 rounded-full ${isLight ? "bg-maritime" : "bg-aqua"}`}
          />
          {eyebrow}
          {isCenter && (
            <span
              className={`h-0.5 w-6 rounded-full ${isLight ? "bg-maritime" : "bg-aqua"}`}
            />
          )}
        </div>
        <h2
          className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[42px] leading-tight text-balance ${
            isLight ? "text-midnight" : "text-white"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-4 text-base leading-relaxed ${
              isLight ? "text-slate-600" : "text-silver"
            } ${isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          >
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
