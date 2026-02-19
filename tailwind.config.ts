import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          violet: "#5b21b6",
          gold: "#f59e0b",
          ink: "#0b0b0f",
          neonRed: "#ff2a6d",
          neonGreen: "#05f7b7"
        }
      },
      boxShadow: {
        neonRed: "0 0 0 1px rgba(255,42,109,.7), 0 0 22px rgba(255,42,109,.25)",
        neonGreen: "0 0 0 1px rgba(5,247,183,.7), 0 0 22px rgba(5,247,183,.25)"
      },
      backgroundImage: {
        "cyber-gradient": "radial-gradient(60% 60% at 10% 10%, rgba(245,158,11,.20), transparent 60%), radial-gradient(60% 60% at 90% 20%, rgba(255,42,109,.18), transparent 60%), radial-gradient(60% 60% at 50% 90%, rgba(5,247,183,.12), transparent 60%), linear-gradient(180deg, rgba(91,33,182,.22), rgba(0,0,0,.80))"
      }
    }
  },
  plugins: []
} satisfies Config;
