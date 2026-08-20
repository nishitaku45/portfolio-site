import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://seisaku-koubo.com";

const paths = [
  { path: "/", priority: 1.0 },
  { path: "/sample/light", priority: 0.6 },
  { path: "/sample/light-cafe", priority: 0.6 },
  { path: "/sample/light-nail", priority: 0.6 },
  { path: "/sample/standard", priority: 0.6 },
  { path: "/sample/standard/menu", priority: 0.5 },
  { path: "/sample/standard/staff", priority: 0.5 },
  { path: "/sample/standard/voice", priority: 0.5 },
  { path: "/sample/standard/access", priority: 0.5 },
  { path: "/sample/standard-yakiniku", priority: 0.6 },
  { path: "/sample/standard-izakaya", priority: 0.6 },
  { path: "/sample/premium-clinic", priority: 0.6 },
  { path: "/sample/premium-sushi", priority: 0.6 },
  { path: "/sample/premium-bistro", priority: 0.6 },
  { path: "/sample/pages-example", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    priority,
  }));
}
