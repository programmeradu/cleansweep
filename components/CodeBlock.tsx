"use client"

import { Check, Copy } from "lucide-react"
import { useState } from "react"

interface CodeBlockProps {
  code: string
  language: string
  fileName?: string
}

export function CodeBlock({ code, language, fileName }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-lg overflow-hidden my-4">
      {fileName && (
        <div className="bg-slate-900 text-slate-400 text-sm px-4 py-2 border-b border-slate-800">
          {fileName}
        </div>
      )}
      <pre className="p-4 bg-slate-900 overflow-x-auto">
        <code className={`language-${language} text-sm`}>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-500" />
        ) : (
          <Copy className="h-4 w-4 text-slate-400" />
        )}
      </button>
    </div>
  )
} 