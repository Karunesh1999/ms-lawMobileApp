import React, { useState, useEffect } from "react"
import { Iphone } from "@/registry/magicui/iphone"
import { Smartphone, Monitor } from "lucide-react"

export interface DemoProps {
  children?: React.ReactNode
}

/**
 * Demo component as specified:
 * Renders the iPhone component inside a 434px container.
 */
export function Demo({ children }: DemoProps) {
  const [currentUrl, setCurrentUrl] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href)
    }
  }, [])

  return (
    <div className="w-[434px] max-w-full mx-auto drop-shadow-2xl">
      <Iphone>
        {children || (
          currentUrl ? (
            <iframe
              src={currentUrl}
              title="Mallery & Stern Mobile Experience"
              className="w-full h-full border-0 select-auto bg-white"
            />
          ) : (
            <div className="w-full h-full bg-white flex items-center justify-center">
              <span className="text-xs text-slate-400">Loading screen...</span>
            </div>
          )
        )}
      </Iphone>
    </div>
  )
}

/**
 * ResponsiveDeviceWrapper:
 * - On Desktop (>= 1024px): Renders the interactive iPhone component preview with a Full Desktop toggle.
 * - On Mobile (< 1024px): Renders the native responsive full-screen app.
 * - Inside Iframe: Renders the native mobile app cleanly without nesting frames.
 */
export function ResponsiveDeviceWrapper({ children }: { children: React.ReactNode }) {
  const [isIframe, setIsIframe] = useState(false)
  const [desktopMode, setDesktopMode] = useState<"iphone" | "desktop">("iphone")

  useEffect(() => {
    // Check if the current window is inside an iframe
    try {
      if (window.self !== window.top) {
        setIsIframe(true)
      }
    } catch {
      setIsIframe(true)
    }
  }, [])

  // If already inside the iPhone preview iframe, render the page directly
  if (isIframe) {
    return <div className="w-full min-h-screen bg-white overflow-x-hidden">{children}</div>
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Desktop Controller Bar */}
      <div className="hidden lg:flex items-center justify-between px-6 py-2.5 bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold tracking-wider uppercase text-slate-200">
            Mallery &amp; Stern • Mobile Showcase Mode
          </span>
        </div>

        <div className="flex items-center bg-slate-800 p-1 rounded-lg border border-slate-700">
          <button
            onClick={() => setDesktopMode("iphone")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
              desktopMode === "iphone"
                ? "bg-[#0E336B] text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>iPhone View (434px)</span>
          </button>
          <button
            onClick={() => setDesktopMode("desktop")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
              desktopMode === "desktop"
                ? "bg-[#0E336B] text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Full Desktop</span>
          </button>
        </div>
      </div>

      {/* Desktop Showcase View: Centered iPhone container */}
      {desktopMode === "iphone" ? (
        <div className="hidden lg:flex min-h-[calc(100vh-49px)] items-center justify-center p-6 bg-slate-950">
          <Demo />
        </div>
      ) : null}

      {/* Standard Full View (Active on mobile/tablet or when Full Desktop is toggled) */}
      <div className={`${desktopMode === "iphone" ? "lg:hidden" : "block"} min-h-screen bg-white overflow-x-hidden`}>
        {children}
      </div>
    </div>
  )
}

export default Demo

