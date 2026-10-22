import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import chatCss from "../../chat.css?inline";
import { ChatLauncher } from "./chat-launcher";

const HOST_ID = "gz-chat-host";

/** Tailwind's @property rules are ignored inside a shadow root, so register them on the document. */
function registerProperties(css: string) {
  if (document.getElementById("gz-chat-props")) return;
  const blocks = css.match(/@property\s+--[\w-]+\s*\{[^}]*\}/g);
  if (!blocks) return;
  const el = document.createElement("style");
  el.id = "gz-chat-props";
  el.textContent = blocks.join("\n");
  document.head.appendChild(el);
}

/**
 * Renders the chatbot inside a Shadow DOM, so the website's global CSS
 * (button, input, a, p ...) cannot break the chat, and the chat CSS cannot break the website.
 */
export function ChatWidget() {
  const [mount, setMount] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let host = document.getElementById(HOST_ID);
    if (!host) {
      host = document.createElement("div");
      host.id = HOST_ID;
      document.body.appendChild(host);
    }
    const shadow = host.shadowRoot ?? host.attachShadow({ mode: "open" });

    if (!shadow.querySelector("style")) {
      const style = document.createElement("style");
      style.textContent = chatCss;
      shadow.appendChild(style);
    }
    let root = shadow.querySelector<HTMLElement>(".gz-root");
    if (!root) {
      root = document.createElement("div");
      root.className = "gz-root";
      shadow.appendChild(root);
    }
    registerProperties(chatCss);

    // Follow the website's light/dark toggle (html[data-theme]).
    const el = root;
    const syncTheme = () =>
      el.setAttribute(
        "data-theme",
        document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark",
      );
    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    setMount(el);
    return () => observer.disconnect();
  }, []);

  return mount ? createPortal(<ChatLauncher container={mount} />, mount) : null;
}
