"use client";

import { useEffect, useRef, useState } from "react";

export function ExpandableText({
  children,
  lines = 3,
  moreLabel,
  lessLabel,
}: {
  children: React.ReactNode;
  lines?: number;
  moreLabel: string;
  lessLabel: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const checkOverflow = () => {
      setIsOverflowing(el.scrollHeight > el.clientHeight);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <div>
      <p
        ref={ref}
        className={`text-zinc-600 ${!expanded ? `line-clamp-${lines}` : ""}`}
      >
        {children}
      </p>

      {isOverflowing && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-sm font-medium underline cursor-pointer"
        >
          {expanded ? lessLabel : moreLabel}
        </button>
      )}
    </div>
  );
}
