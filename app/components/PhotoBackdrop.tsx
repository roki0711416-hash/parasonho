import Photo from "./Photo";

type PhotoBackdropVariant = "hero" | "footer" | "cta";

interface PhotoBackdropProps {
  src: string;
  alt: string;
  variant?: PhotoBackdropVariant;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}

const overlayByVariant: Record<
  PhotoBackdropVariant,
  { bottom: string; side: string | null }
> = {
  hero: { bottom: "ps-photo-scrim-bottom", side: "ps-photo-scrim-side" },
  footer: { bottom: "ps-photo-scrim-footer", side: null },
  cta: { bottom: "ps-photo-scrim-cta", side: "ps-photo-scrim-side-soft" },
};

export default function PhotoBackdrop({
  src,
  alt,
  variant = "hero",
  priority = false,
  className = "",
  imageClassName = "object-cover object-[center_42%] sm:object-center",
}: PhotoBackdropProps) {
  const overlay = overlayByVariant[variant];

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Photo
        src={src}
        alt={alt}
        priority={priority}
        sizes="100vw"
        className="h-full w-full"
        imageClassName={imageClassName}
      />
      <div className={`absolute inset-0 ${overlay.bottom}`} aria-hidden="true" />
      {overlay.side && (
        <div className={`absolute inset-0 ${overlay.side}`} aria-hidden="true" />
      )}
    </div>
  );
}
