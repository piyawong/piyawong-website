import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',         // ให้ next build สร้างไฟล์ static ในโฟลเดอร์ out/
  images: { unoptimized: true }, // ถ้าใช้ <Image/> ให้เรนเดอร์เป็นไฟล์ปกติ
  trailingSlash: true,      // แนะนำเพื่อให้ S3/CloudFront หา index.html ได้ง่ายขึ้น

  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },

  /* config options here */
};

export default nextConfig;
