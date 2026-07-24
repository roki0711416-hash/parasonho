import type { ClubSectionContent } from "../lib/clubs";

interface ClubSectionBodyProps {
  content: ClubSectionContent;
  className?: string;
}

export default function ClubSectionBody({ content, className = "" }: ClubSectionBodyProps) {
  if (typeof content === "string") {
    return <p className={`mt-4 text-sm leading-7 text-[#111111]/70 ${className}`}>{content}</p>;
  }

  return (
    <div className={`mt-4 space-y-4 ${className}`}>
      {content.paragraphs.map((paragraph, index) => (
        <p key={index} className="text-sm leading-7 text-[#111111]/70">
          {paragraph}
        </p>
      ))}
      {content.note && (
        <p className="text-xs leading-6 text-[#111111]/45 sm:text-[13px]">{content.note}</p>
      )}
    </div>
  );
}
