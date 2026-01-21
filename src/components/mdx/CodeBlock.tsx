"use client";

import { useState, useRef } from "react";
import { Check, Copy } from "lucide-react";

interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode;
}

export function Pre({ children, ...props }: PreProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const copyToClipboard = async () => {
    const code = preRef.current?.textContent || "";
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative ">
      <button
        onClick={copyToClipboard}
        className={`absolute top-3 right-3 px-2 py-1.5 rounded-md flex items-center gap-1.5 text-xs cursor-pointer font-medium transition-all duration-200 z-10 ${
          copied
            ? "bg-green-500/20 text-green-400 opacity-100"
            : "bg-zinc-700/50 hover:bg-zinc-600 text-zinc-400 "
        }`}
        aria-label="Copy code"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" />
            <span>Copy</span>
          </>
        )}
      </button>
      <pre ref={preRef} {...props}>
        {children}
      </pre>
    </div>
  );
}
