import { MapPin } from "lucide-react";
import type { ClubSectionContent } from "../lib/clubs";

interface ClubSectionBodyProps {
  content: ClubSectionContent;
  className?: string;
  mapLabel?: string;
}

export default function ClubSectionBody({
  content,
  className = "",
  mapLabel = "Googleマップで見る",
}: ClubSectionBodyProps) {
  if (typeof content === "string") {
    return <p className={`mt-4 text-sm leading-7 text-[#111111]/70 ${className}`}>{content}</p>;
  }

  const paragraphs = content.paragraphs ?? [];
  const addressLines = content.addressLines ?? [];

  return (
    <div className={`mt-4 space-y-4 ${className}`}>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-sm leading-7 text-[#111111]/70">
          {paragraph}
        </p>
      ))}

      {addressLines.length > 0 && (
        <address className="not-italic text-sm leading-7 text-[#111111]/70">
          {addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      )}

      {content.note && (
        <p className="text-xs leading-6 text-[#111111]/45 sm:text-[13px]">{content.note}</p>
      )}

      {content.mapUrl && (
        <a
          href={content.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ps-btn-gold mt-2 inline-flex w-full items-center justify-center gap-2 py-3.5 text-sm sm:w-auto sm:min-w-[220px] sm:py-[1.05rem] sm:text-base"
        >
          <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
          {mapLabel}
        </a>
      )}
    </div>
  );
}
