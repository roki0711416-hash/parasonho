import type { ReactNode } from "react";
import PhotoBackdrop from "./PhotoBackdrop";
import { FIELD_IMAGE, HERO_IMAGE } from "../lib/images";

type PagePhotoSectionVariant = "hero" | "footer" | "cta";

interface PagePhotoSectionProps {
  children: ReactNode;
  src?: string;
  alt?: string;
  variant?: PagePhotoSectionVariant;
  className?: string;
  contentClassName?: string;
  priority?: boolean;
}

const defaultImage: Record<PagePhotoSectionVariant, { src: string; alt: string }> = {
  hero: { src: HERO_IMAGE, alt: "サッカー選手" },
  footer: { src: FIELD_IMAGE, alt: "夕暮れのサッカー場" },
  cta: { src: FIELD_IMAGE, alt: "夕暮れのサッカー場" },
};

export default function PagePhotoSection({
  children,
  src,
  alt,
  variant = "hero",
  className = "",
  contentClassName = "",
  priority = false,
}: PagePhotoSectionProps) {
  const image = defaultImage[variant];

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <PhotoBackdrop
        src={src ?? image.src}
        alt={alt ?? image.alt}
        variant={variant}
        priority={priority}
      />
      <div className={`relative z-10 ps-on-photo text-white ${contentClassName}`}>
        {children}
      </div>
    </section>
  );
}
