import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const repoRoot = path.resolve(import.meta.dirname);
  const clientDir = path.join(repoRoot, "client");
  const envRoot = loadEnv(mode, repoRoot, "");
  const envClient = loadEnv(mode, clientDir, "");
  const plugins = [react(), tailwindcss()];
  const emailJs = (key: string) =>
    (envClient[key] ?? envRoot[key] ?? "").trim();
  const contactEmail =
    emailJs("VITE_CONTACT_EMAIL") || "Bassamas101@gmail.com";

  return (async () => {
    try {
      const { jsxLocPlugin } = await import("@builder.io/vite-plugin-jsx-loc");
      plugins.push(jsxLocPlugin());
    } catch {
      // Optional in deployment environments like Netlify.
    }

    try {
      const { vitePluginManusRuntime } = await import(
        "vite-plugin-manus-runtime"
      );
      plugins.push(vitePluginManusRuntime());
    } catch {
      // Optional in deployment environments like Netlify.
    }

    return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    envDir: repoRoot,
    define: {
      "import.meta.env.VITE_EMAILJS_SERVICE_ID": JSON.stringify(
        emailJs("VITE_EMAILJS_SERVICE_ID")
      ),
      "import.meta.env.VITE_EMAILJS_TEMPLATE_ID": JSON.stringify(
        emailJs("VITE_EMAILJS_TEMPLATE_ID")
      ),
      "import.meta.env.VITE_EMAILJS_PUBLIC_KEY": JSON.stringify(
        emailJs("VITE_EMAILJS_PUBLIC_KEY")
      ),
      "import.meta.env.VITE_CONTACT_EMAIL": JSON.stringify(contactEmail),
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      port: 3000,
      strictPort: false, // Will find next available port if 3000 is busy
      host: true,
      allowedHosts: [
        ".manuspre.computer",
        ".manus.computer",
        ".manus-asia.computer",
        ".manuscomputer.ai",
        ".manusvm.computer",
        "localhost",
        "127.0.0.1",
      ],
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
    };
  })();
});
