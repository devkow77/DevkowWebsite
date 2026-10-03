import { readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { loadEnv } from "vite";

const root = process.cwd();
const distDirectory = path.join(root, "dist");
const htmlPath = path.join(distDirectory, "index.html");
const serverDirectory = path.join(distDirectory, "server");
const serverEntry = path.join(serverDirectory, "entry-server.js");

const { render } = await import(pathToFileURL(serverEntry).href);
const appHtml = render();
let html = await readFile(htmlPath, "utf8");

html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

const siteUrl = loadEnv("production", root, "").VITE_SITE_URL?.replace(
  /\/$/,
  "",
);

if (siteUrl) {
  const parsedUrl = new URL(siteUrl);

  if (!["http:", "https:"].includes(parsedUrl.protocol)) {
    throw new Error("VITE_SITE_URL musi być adresem HTTP lub HTTPS.");
  }

  html = html
    .replace(
      "</title>",
      `</title>\n    <link rel="canonical" href="${siteUrl}/">`,
    )
    .replaceAll('content="/og-image.svg"', `content="${siteUrl}/og-image.svg"`);

  await writeFile(
    path.join(distDirectory, "robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
  );
  await writeFile(
    path.join(distDirectory, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n  </url>\n</urlset>\n`,
  );
} else {
  console.warn(
    "Pominięto sitemap.xml. Ustaw VITE_SITE_URL po wybraniu publicznej domeny.",
  );
}

await writeFile(htmlPath, html);
await rm(serverDirectory, { recursive: true, force: true });
