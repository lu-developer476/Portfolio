import { createSocialImageResponse } from "../social-image";

export const runtime = "edge";

export function GET() {
  return createSocialImageResponse({
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=31536000, immutable"
    }
  });
}
