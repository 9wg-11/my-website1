import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const analyticsBase = import.meta.env.VITE_ANALYTICS_ENDPOINT?.trim();
const analyticsSiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID?.trim();
if (analyticsBase && analyticsSiteId && typeof document !== "undefined") {
  const script = document.createElement("script");
  script.defer = true;
  script.src = `${analyticsBase.replace(/\/$/, "")}/umami`;
  script.dataset.websiteId = analyticsSiteId;
  document.body.appendChild(script);
}

createRoot(document.getElementById("root")!).render(<App />);
