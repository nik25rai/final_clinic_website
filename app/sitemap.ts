import type { MetadataRoute } from "next";
import { clinic } from "@/lib/config";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: clinic.siteUrl }]; }
