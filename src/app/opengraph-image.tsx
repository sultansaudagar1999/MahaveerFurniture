import { ImageResponse } from "next/og";
import { fullAddress, site } from "@/content/site";

export const alt = `${site.name} — furniture showroom in Bopodi, Pune`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#15110e",
          color: "#f5f0e8",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 40 40">
            <rect x="0.75" y="0.75" width="38.5" height="38.5" fill="none" stroke="#f5f0e8" strokeWidth="1.5" />
            <path d="M10 29V12l10 9 10-9v17" fill="none" stroke="#f5f0e8" strokeWidth="1.75" />
          </svg>
          <div style={{ fontSize: 28, letterSpacing: 8, textTransform: "uppercase", color: "#d39a6a" }}>
            Mahaveer Furniture
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, lineHeight: 1, letterSpacing: -3 }}>Furniture for the</div>
          <div style={{ fontSize: 96, lineHeight: 1.05, letterSpacing: -3 }}>way you live.</div>
        </div>
        <div style={{ fontSize: 26, color: "rgba(245,240,232,0.7)" }}>{fullAddress}</div>
      </div>
    ),
    size,
  );
}
