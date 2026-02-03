import { ImageResponse } from "next/og";

export const alt = "Rodrigo Arias - Web Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0d0d",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          border: "1px solid #2e2e2e",
        }}
      >
        {/* Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 400,
            color: "white",
            letterSpacing: "0.15em",
            fontFamily: "monospace",
          }}
        >
          RODRIGO ARIAS
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: "#999999",
            letterSpacing: "0.15em",
            fontFamily: "monospace",
          }}
        >
          WEB DEVELOPER
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
