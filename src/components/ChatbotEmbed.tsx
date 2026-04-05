"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    botpress?: {
      init: (config: { elementId: string; botId: string }) => void;
    };
  }
}

export function ChatbotEmbed() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2026/04/05/14/20260405142742-5GOLT0ZM.js";
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="mx-auto max-w-lg px-2 sm:max-w-2xl sm:px-0">
      <div className="h-[400px] overflow-hidden rounded-xl border border-white/8 bg-[#111] sm:h-[500px] md:h-[550px] lg:h-[600px]">
        <div id="bp-webchat" className="h-full w-full" />
      </div>
    </div>
  );
}
