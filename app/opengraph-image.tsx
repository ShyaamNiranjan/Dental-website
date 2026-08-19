import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants/site";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #042f2e 0%, #0f766e 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            opacity: 0.8,
          }}
        >
          Premium Dental Care
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 24 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 32, marginTop: 24, maxWidth: 900, lineHeight: 1.4 }}>
          Mobile-first booking, secure contact forms, and local SEO built for modern practices.
        </div>
      </div>
    ),
    { ...size },
  );
}
