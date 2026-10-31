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
          className={`mb-3 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] ${
            isLight ? "text-[#0284c7]" : "text-[#70bfff]"
          } ${isCenter ? "justify-center" : ""}`}
        >
          <span
            className={`h-0.5 w-5 rounded-full ${isLight ? "bg-[#0284c7]" : "bg-[#70bfff]"}`}
          />
          {eyebrow}
          {isCenter && (
            <span
              className={`h-0.5 w-5 rounded-full ${isLight ? "bg-[#0284c7]" : "bg-[#70bfff]"}`}
            />
          )}
        </div>
        <h2
          className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[40px] leading-tight text-balance ${
            isLight ? "text-[#071d33]" : "text-white"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-3.5 text-base leading-relaxed ${
              isLight ? "text-[#52677c]" : "text-[#cbd5e1]"
            } ${isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          >
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
