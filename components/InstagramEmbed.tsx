"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

// Official Instagram post embed via their public embed.js widget.
// postUrl must be a real, public post URL, e.g.
// "https://www.instagram.com/p/POST_ID/". Nothing is downloaded —
// Instagram serves the image/video and renders its own chrome.
export function InstagramEmbed({ postUrl }: { postUrl: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = document.getElementById("ig-embed-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "ig-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm?.Embeds.process();
    }
  }, [postUrl]);

  return (
    <div ref={ref} className="overflow-hidden">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={{ margin: 0, width: "100%" }}
      />
    </div>
  );
}
