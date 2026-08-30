import { useEffect } from "react";

export default function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} — Travel Agent Toolkit` : "Travel Agent Toolkit";
    document.title = fullTitle;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = "description";
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
}
