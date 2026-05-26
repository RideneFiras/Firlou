import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #050816 0%, #0b1130 45%, #1a1148 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg, #3b66ff, #e879f9)",
            }}
          />
          <span style={{ fontSize: 40, fontWeight: 700 }}>Firlou</span>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          We build modern digital systems that help businesses grow faster.
        </div>
        <div style={{ marginTop: 32, fontSize: 30, color: "#aab4d4" }}>
          {`Web · SaaS · Dashboards · AI · Automation — ${siteConfig.city}`}
        </div>
      </div>
    ),
    { ...size },
  );
}
