import { ImageResponse } from "next/og";

export const socialImageAlt = "Vista previa del portfolio de Lucas Montenegro";
export const socialImageSize = {
  width: 1200,
  height: 630
};

export function createSocialImageResponse(init?: ConstructorParameters<typeof ImageResponse>[1]) {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #050814 0%, #101827 48%, #1d1635 100%)",
          color: "white",
          display: "flex",
          fontFamily: "Inter, Arial, sans-serif",
          height: "100%",
          justifyContent: "center",
          overflow: "hidden",
          padding: 64,
          position: "relative",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "radial-gradient(circle, rgba(214,255,53,0.28) 0%, rgba(31,255,199,0.12) 35%, transparent 70%)",
            borderRadius: "50%",
            display: "flex",
            filter: "blur(2px)",
            height: 560,
            left: -170,
            position: "absolute",
            top: -180,
            width: 560
          }}
        />
        <div
          style={{
            background: "radial-gradient(circle, rgba(123,92,255,0.38) 0%, rgba(31,255,199,0.08) 42%, transparent 70%)",
            borderRadius: "50%",
            bottom: -220,
            display: "flex",
            height: 620,
            position: "absolute",
            right: -160,
            width: 620
          }}
        />

        <div
          style={{
            background: "rgba(0, 0, 0, 0.42)",
            border: "1px solid rgba(255, 255, 255, 0.16)",
            borderRadius: 36,
            boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
            display: "flex",
            gap: 44,
            height: 482,
            padding: 34,
            position: "relative",
            width: 1072
          }}
        >
          <div
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: 28,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              width: 510
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "rgba(8, 13, 26, 0.82)",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                gap: 10,
                height: 52,
                padding: "0 22px"
              }}
            >
              <span style={{ background: "#ff5f57", borderRadius: 999, height: 14, width: 14 }} />
              <span style={{ background: "#ffbd2e", borderRadius: 999, height: 14, width: 14 }} />
              <span style={{ background: "#28c840", borderRadius: 999, height: 14, width: 14 }} />
              <span style={{ color: "rgba(255,255,255,0.46)", fontSize: 18, marginLeft: 18 }}>
                lu-dev-portfolio.vercel.app
              </span>
            </div>
            <div
              style={{
                background: "linear-gradient(135deg, #070b14 0%, #111827 58%, #24163f 100%)",
                display: "flex",
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                padding: 34,
                position: "relative"
              }}
            >
              <div style={{ color: "#d6ff35", display: "flex", fontSize: 36, fontWeight: 800, lineHeight: 1.05 }}>
                Interfaces que escalan
              </div>
              <div style={{ color: "#ffffff", display: "flex", fontSize: 36, fontWeight: 800, lineHeight: 1.05 }}>
                sin romper la experiencia
              </div>
              <div style={{ color: "rgba(255,255,255,0.68)", display: "flex", fontSize: 18, lineHeight: 1.35, marginTop: 22 }}>
                Performance, UX y backend listo para producción.
              </div>
              <div style={{ display: "flex", gap: 14, marginTop: 34 }}>
                {["Performance", "UX/UI", "Backend"].map((label) => (
                  <div
                    key={label}
                    style={{
                      background: "rgba(0,0,0,0.34)",
                      border: "1px solid rgba(214,255,53,0.28)",
                      borderRadius: 14,
                      color: "rgba(255,255,255,0.82)",
                      display: "flex",
                      fontSize: 18,
                      padding: "14px 18px"
                    }}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center" }}>
            <div style={{ color: "#d6ff35", display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
              Portfolio digital
            </div>
            <div style={{ display: "flex", flexDirection: "column", fontSize: 66, fontWeight: 900, letterSpacing: -3, lineHeight: 0.95, marginTop: 20 }}>
              <span>Lucas</span>
              <span>Montenegro</span>
            </div>
            <div style={{ color: "rgba(255,255,255,0.78)", display: "flex", fontSize: 34, fontWeight: 600, marginTop: 26 }}>
              Full Stack Developer
            </div>
            <div style={{ color: "rgba(255,255,255,0.58)", display: "flex", fontSize: 22, lineHeight: 1.35, marginTop: 28, maxWidth: 430 }}>
              Interfaces UX/UI, frontend escalable y experiencias web listas para producción.
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...socialImageSize,
      ...init
    }
  );
}
