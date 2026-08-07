import { createSocialImageResponse, socialImageAlt, socialImageSize } from "./social-image";

export const runtime = "edge";
export const alt = socialImageAlt;
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImageResponse();
}
