import type { ClubVideo } from "../lib/clubs";

interface ClubYoutubeEmbedProps {
  video: ClubVideo;
  className?: string;
}

export default function ClubYoutubeEmbed({ video, className = "" }: ClubYoutubeEmbedProps) {
  return (
    <div className={className}>
      <h3 className="text-base font-extrabold text-[#14213D] sm:text-lg">{video.heading}</h3>
      <p className="mt-3 text-sm leading-7 text-[#111111]/70">{video.description}</p>
      <div className="mt-5 overflow-hidden rounded-2xl">
        <div className="relative aspect-video w-full">
          <iframe
            src={video.embedUrl}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
