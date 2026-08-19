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
          background: "linear-gradient(135deg, #020617 0%, #0f172a 50%, #042f2e 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#5eead4",
            marginBottom: 24,
          }}
        >
          Beverly Hills, California
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.15 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 28, marginTop: 24, color: "#94a3b8", maxWidth: 800, lineHeight: 1.5 }}>
          {siteConfig.tagline}
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 32,
            fontSize: 18,
            color: "#64748b",
          }}
        >
          <span>{siteConfig.phone}</span>
          <span>·</span>
          <span>{siteConfig.address.street}</span>
          <span>·</span>
          <span>LA Magazine Top Dentist 2024</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
