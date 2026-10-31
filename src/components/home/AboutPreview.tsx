import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#cbd5e1] max-w-lg font-normal text-justify [text-align-last:left]">
              We are committed to delivering professional, independent and reliable marine consultancy and survey services to meet the evolving needs of our clients worldwide.
            </p>
            <div className="mt-8">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-transparent px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-all duration-300 hover:bg-white hover:text-[#071d33]"
              >
                About Us <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="relative min-h-[340px] w-full overflow-hidden lg:min-h-full">
          <Image
            src="/images/services/marine-warranty.jpg"
            alt="Constellation Marine professional surveyor"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#071d33]/60 via-transparent to-transparent lg:bg-linear-to-r lg:from-[#071d33] lg:via-[#071d33]/25 lg:to-transparent" />
        </div>
      </div>
    </section>
  );
}
